# 💬 tp-exam-chat

Mini chat en temps réel — Examen DevOps

## Stack
- **Frontend** : HTML/CSS/JS vanilla → déployé sur **Vercel**
- **Backend** : Node.js + Express → déployé sur **Render**
- **CI/CD** : GitHub Actions

## URLs publiques
- Frontend : `https://tp-exam-chat-frontend.vercel.app`
- Backend  : `https://tp-exam-chat-backend.onrender.com`

## API
| Méthode | Route           | Description            |
|---------|----------------|------------------------|
| GET     | /api/messages  | Retourne tous les messages |
| POST    | /api/messages  | Ajoute un message `{author, content}` |
| GET     | /health        | Health check |

## Lancer en local
```bash
docker-compose up --build
```
- Frontend : http://localhost:8080
- Backend  : http://localhost:3001
