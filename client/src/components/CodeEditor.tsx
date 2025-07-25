import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CodeEditor() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("server.js");

  const codeSnippets = {
    "server.js": `const express = require('express');
const redis = require('redis');
const mongoose = require('mongoose');

const app = express();
const client = redis.createClient();

// Middleware for caching
const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl;
  const cached = await client.get(key);
  
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  res.sendResponse = res.json;
  res.json = (body) => {
    client.setex(key, 3600, JSON.stringify(body));
    res.sendResponse(body);
  };
  
  next();
};

app.use('/api', cacheMiddleware);
app.listen(5000, () => console.log('Server running...'));`,

    "auth.js": `const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
  async generateToken(user) {
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role
    };
    
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d',
      issuer: 'ankitkjha-portfolio'
    });
  }
  
  async verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
  }
  
  middleware() {
    return (req, res, next) => {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ 
          error: 'Access denied' 
        });
      }
      
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (error) {
        res.status(403).json({ error: 'Invalid token' });
      }
    };
  }
}

module.exports = new AuthService();`,

    "microservice.js": `const { EventEmitter } = require('events');

class MicroserviceBase extends EventEmitter {
  constructor(serviceName) {
    super();
    this.serviceName = serviceName;
    this.health = { status: 'UP', timestamp: Date.now() };
    this.setupHealthCheck();
  }
  
  setupHealthCheck() {
    setInterval(() => {
      this.health.timestamp = Date.now();
      this.emit('health-check', this.health);
    }, 30000);
  }
  
  async handleRequest(request) {
    const startTime = Date.now();
    
    try {
      const result = await this.processRequest(request);
      const duration = Date.now() - startTime;
      
      this.emit('request-completed', {
        service: this.serviceName,
        duration,
        success: true
      });
      
      return { success: true, data: result };
    } catch (error) {
      this.emit('request-failed', {
        service: this.serviceName,
        error: error.message
      });
      
      throw error;
    }
  }
  
  async processRequest(request) {
    // Override in child classes
    throw new Error('processRequest must be implemented');
  }
}

module.exports = MicroserviceBase;`
  };

  const tabs = Object.keys(codeSnippets);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Code Architecture</h2>
          
          <div className="bg-card border rounded-xl overflow-hidden shadow-lg">
            {/* Code Editor Header */}
            <div className="bg-muted/50 border-b border-border px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    ~/projects/backend-systems
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Node.js • Express.js • Production Ready
                </div>
              </div>
            </div>

            {/* Tab Bar */}
            <div className="flex bg-muted/30 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-card border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="p-6 bg-card">
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-foreground">
                  {codeSnippets[activeTab as keyof typeof codeSnippets]}
                </code>
              </pre>
            </div>
          </div>

          {/* Code Stats */}
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Microservices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500 mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}