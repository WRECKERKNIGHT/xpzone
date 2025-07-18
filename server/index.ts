import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import session from 'express-session';
import ConnectPgSimple from 'connect-pg-simple';
import { neon } from '@neondatabase/serverless';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const sql = neon(process.env.DATABASE_URL!);

// Session store
const PgSession = ConnectPgSimple(session);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL,
    tableName: 'session'
  }),
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  }
}));

// API routes placeholder
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'XPZone Gaming Café API is running' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist/public')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🎮 XPZone Gaming Café server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});