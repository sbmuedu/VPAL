# Git Commands


- Check what will be pushed

**git status**

- Check your commits

**git log --oneline**

- Verify remote is correct

**git remote -v**

## List all files that will be pushed (should NOT include node_modules or dist)

- git ls-files

- git push -f origin main

What This Command Does:
-f or --force: Overwrites the remote repository completely
origin: Your GitHub repository
main: The branch you're pushing to


1. Navigate to your project

cd /path/to/your/project

2. Remove any existing git data

rm -rf .git

3. Initialize fresh git repository

git init

5. Check what will be added (verify node_modules and dist are excluded)

git status

6. Add all files

git add .

7. Verify again

git status

8. Initial commit

git commit -m "Initial commit: Complete project structure"

9. Add remote (replace with your actual URL)

git remote add origin https://github.com/yourusername/your-repo-name.git

Here are the different ways to sync your local changes with GitHub:

## 1. Basic Sync Workflow (Most Common)

### Step 1: Check What Changed
```bash
# See what files were modified, added, or deleted
git status

# See exact changes in files
git diff
```

### Step 2: Stage Your Changes
```bash
# Add specific files
git add filename1.ts filename2.ts

# Or add all changes
git add .

# Or add changes interactively
git add -p
```

### Step 3: Commit Your Changes
```bash
# Commit with a descriptive message
git commit -m "feat: add medical service simulation logic
- Implement disease progression algorithms
- Add medication response prediction
- Fix JSON type issues in sessions service"
```

### Step 4: Push to GitHub
```bash
# Push to main branch
git push origin main

# Or if you're on a different branch
git push origin your-branch-name
```

## 2. Different Scenarios

### Scenario A: You Have Uncommitted Changes
```bash
# Check what's changed
git status

# Add and commit
git add .
git commit -m "Describe your changes"

# Push to GitHub
git push origin main
```

### Scenario B: Someone Else Pushed Changes to GitHub
```bash
# First, pull the latest changes
git pull origin main

# If you have local changes, they might conflict
# Resolve any conflicts, then:
git add .
git commit -m "Merge remote changes and resolve conflicts"
git push origin main
```

### Scenario C: You Want to Update Without Commit History
```bash
# Add all changes
git add .

# Commit with a generic message (if you don't care about detailed history)
git commit -m "Update project files"

# Force push (use carefully - overwrites remote history)
git push -f origin main
```

## 3. Advanced Sync Options

### Option 1: Sync with Detailed Commit History
```bash
# Step by step with verification
git status
git add .
git commit -m "feat: implement medical assessment engine
- Add competency scoring algorithms  
- Integrate LLM service for patient responses
- Fix type errors in assessment service
- Update DTOs with proper validation"
git push origin main
```

### Option 2: Sync Specific Files Only
```bash
# Add only specific files
git add src/medical/medical.service.ts
git add src/sessions/sessions.service.ts

# Commit only those files
git commit -m "fix: resolve TypeScript errors in core services"

# Push
git push origin main
```

### Option 3: Sync with Tags (For Releases)
```bash
# Regular commit and push
git add .
git commit -m "feat: complete medical simulation v1.0"
git push origin main

# Add a version tag
git tag v1.0.0
git push origin v1.0.0
```

## 4. Useful Git Commands for Syncing

### Check Remote Status
```bash
# See what's different between local and remote
git fetch
git status

# Or see the differences
git log origin/main..main   # What you have that remote doesn't
git log main..origin/main   # What remote has that you don't
```

### Safe Sync (Recommended for Teams)
```bash
# Always pull first to avoid conflicts
git pull origin main

# Then add your changes
git add .
git commit -m "Your commit message"
git push origin main
```

### Force Sync (Use Carefully)
```bash
# Only use when you're sure you want to overwrite remote
git add .
git commit -m "Overwrite remote with local changes"
git push -f origin main
```

## 5. Complete Sync Example

```bash
# 1. See what changed
echo "=== Checking changes ==="
git status

# 2. Review changes before adding
echo "=== Reviewing changes ==="
git diff

# 3. Add all changes
echo "=== Staging changes ==="
git add .

# 4. Commit with good message
echo "=== Committing changes ==="
git commit -m "feat: enhance medical simulation
- Add physiological modeling algorithms
- Implement time-based disease progression
- Fix JSON serialization issues
- Update API documentation"

# 5. Push to GitHub
echo "=== Pushing to GitHub ==="
git push origin main

# 6. Verify
echo "=== Verification ==="
git log --oneline -3
```

## 6. Handling Common Issues

### If you get "Updates were rejected":
```bash
# Pull first, then push
git pull origin main
git push origin main
```

### If you have merge conflicts:
```bash
# Pull will show conflicts
git pull origin main

# Edit files to resolve conflicts (look for <<<<<<< HEAD markers)
# After resolving:
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### If you want to discard local changes and sync with remote:
```bash
# WARNING: This discards all local changes
git fetch origin
git reset --hard origin/main
```

## Quick Reference Card:

```bash
# Daily workflow:
git status              # See changes
git add .              # Stage changes  
git commit -m "msg"    # Commit changes
git push origin main   # Sync to GitHub

# When collaborating:
git pull origin main   # Get latest changes first
# ... make your changes ...
git add .
git commit -m "msg"
git push origin main
```

**Which scenario matches your current situation?** I can provide more specific instructions based on exactly what changes you've made locally.
# DB
in DB folder run postgres and create app_db % docker compose up

prisma schema i sin prisma folder

Set the DATABASE_URL in your .env file.
Run npx prisma generate to generate the client.
Run npx prisma db push (for prototyping) or npx prisma migrate dev (for proper migrations) to