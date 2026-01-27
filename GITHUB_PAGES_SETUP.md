# GitHub Pages Setup Instructions

## Current Status

✅ **All deployment configurations are correct:**
- Vite config has the correct base path (`/spice-haven-showcase/`)
- GitHub Actions workflow is properly configured
- Build and deployment succeed automatically on push to main
- Artifacts are uploaded correctly

⚠️ **IMPORTANT**: After enabling GitHub Pages, you must trigger a new deployment!

## How to Enable GitHub Pages

### Step 1: Go to Repository Settings
1. Navigate to https://github.com/jem93604/spice-haven-showcase
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**

### Step 2: Configure GitHub Pages
1. Under **Build and deployment** section:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - This is crucial - do NOT select "Deploy from a branch"
   
2. Click **Save** if prompted

### Step 3: Trigger a New Deployment (CRITICAL!)

**After enabling GitHub Pages, you MUST trigger a new deployment:**

**Option 1: Manual Workflow Trigger (Recommended)**
1. Go to the **Actions** tab in your repository
2. Click on **"Deploy to GitHub Pages"** in the left sidebar
3. Click the **"Run workflow"** button on the right
4. Select the **main** branch from the dropdown
5. Click **"Run workflow"** (green button)
6. Wait for the workflow to complete (usually takes 1-2 minutes)

**Option 2: Push a Change to Main**
1. Make any small change to the repository on the main branch
2. Commit and push the change
3. The workflow will automatically trigger

**Why is this needed?**
The last deployment ran BEFORE GitHub Pages was enabled. GitHub Pages needs a fresh deployment after being enabled to work properly.

### Step 4: Verify
Visit: https://jem93604.github.io/spice-haven-showcase/

You should see the Spice Haven restaurant website.

## Troubleshooting

### If you still see 404 after enabling GitHub Pages:
1. **Did you trigger a new deployment?** This is the most common issue! See Step 3 above.
2. Check that "GitHub Actions" is selected as the source (not a branch)
3. Go to Actions tab and verify the workflow completed successfully after you enabled Pages
4. Wait 2-5 minutes after the workflow completes for DNS propagation
5. Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### How to verify the deployment worked:
1. Go to the **Actions** tab
2. Look for a **green checkmark** next to the latest "Deploy to GitHub Pages" run
3. The run should have completed AFTER you enabled GitHub Pages
4. Click on the run to see deployment details

### If you see "Enforce HTTPS" warning:
- You can safely enable "Enforce HTTPS" - it's recommended

## Technical Details

The workflow:
- Triggers on push to `main` branch
- Builds the Vite React app with production base path
- Uploads the `dist` folder as a GitHub Pages artifact
- Deploys using `actions/deploy-pages@v4`

All asset paths are correctly prefixed with `/spice-haven-showcase/` in production builds.
