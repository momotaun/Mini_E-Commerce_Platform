# 📋 Pull Request Checklist

## 🔍 Summary

<!-- Provide a short summary explaining what the PR does -->
Fixes #

---

## ✅ Checklist

### 📄 PR Description
- [ ] Includes a clear and concise summary
- [ ] References related issues (e.g. `Fixes #123`)
- [ ] Screenshots added for any UI changes
- [ ] Describes any breaking changes or database migrations

---

### 🧠 Code Quality
- [ ] Code is clean, readable, and follows project conventions
- [ ] Adheres to SOLID and DRY principles
- [ ] No commented-out or dead code remains
- [ ] Structured properly into MVC folders (features/services/components)

---

### 📁 Project Structure
- [ ] Files are located in the correct folders
- [ ] Naming conventions are consistent
- [ ] No temporary or junk files committed (`.DS_Store`, `debug.ts`, etc.)

---

### ✅ Functionality
- [ ] Feature works as expected
- [ ] Covers edge cases and error states
- [ ] Backend endpoints tested and verified
- [ ] Frontend correctly consumes API responses

---

### 🧪 Testing
- [ ] Unit/integration tests written and passing
- [ ] No `.only` or `.skip` left in tests
- [ ] Manual testing completed (if required)

---

### 🛡️ Security & Validation
- [ ] All user input is validated
- [ ] No secrets, tokens, or sensitive data exposed
- [ ] Authentication and permissions implemented where needed

---

### 📚 Documentation
- [ ] Code is commented where needed
- [ ] New components/services/models documented
- [ ] README/docs updated if relevant

---

### 🚀 Performance & Optimization
- [ ] Frontend avoids unnecessary re-renders
- [ ] Backend avoids N+1 queries or large payloads
- [ ] No large unused libraries introduced

---

### 🔧 DevOps / Deployment
- [ ] Dockerfile updated if needed and working
- [ ] Environment variables configured correctly
- [ ] CI/CD pipeline checks are passing
- [ ] No secrets committed in `.env` or code

---

### 🧑‍💻 Peer Review
- [ ] PR is focused and appropriately sized
- [ ] Reviewers assigned
- [ ] Any complex logic is explained in comments
- [ ] Tag stakeholders or leads for review if required

---

### 🧼 Post-Merge
- [ ] Branch will be deleted after merge
- [ ] Linked issues will auto-close (`Fixes #123`)
- [ ] CHANGELOG updated (if used)

---

## 📎 Additional Notes

<!-- Optional: Add anything else reviewers should know -->
