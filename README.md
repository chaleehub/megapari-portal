# 🎯 Megapari Affiliate Portal

A complete affiliate materials portal — banners, captions, referral links — hosted free on GitHub Pages.

---

## 📁 Files in this project

| File | Purpose |
|------|---------|
| `index.html` | The **user-facing portal** (affiliates visit this) |
| `admin.html` | The **admin panel** (only you use this) |

---

## 🚀 How to Host on GitHub Pages (Step-by-Step for Beginners)

### Step 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign up** and create a free account
3. Verify your email

---

### Step 2 — Create a New Repository
1. After logging in, click the **green "New"** button (top left)
2. Fill in:
   - **Repository name:** `megapari-portal` (or any name you like)
   - **Visibility:** ✅ Select **Public** (required for free GitHub Pages)
   - Leave everything else as default
3. Click **Create repository**

---

### Step 3 — Upload Your Files
1. On your new repository page, click **"uploading an existing file"** link
2. Drag and drop both files:
   - `index.html`
   - `admin.html`
3. At the bottom, click **"Commit changes"** (green button)

---

### Step 4 — Enable GitHub Pages
1. Click **Settings** (tab at the top of your repository)
2. Scroll down the left sidebar and click **Pages**
3. Under **"Source"**, click the dropdown that says `None`
4. Select **`main`** branch
5. Keep the folder as `/ (root)`
6. Click **Save**

---

### Step 5 — Your Site is Live! 🎉
After 1–2 minutes, GitHub will show you a green box with your URL:

```
https://YOUR-USERNAME.github.io/megapari-portal/
```

- **User portal:** `https://YOUR-USERNAME.github.io/megapari-portal/`
- **Admin panel:** `https://YOUR-USERNAME.github.io/megapari-portal/admin.html`

> ⚠️ **Bookmark your admin link and keep it private!**

---

## 🔐 Admin Login

Default password: **`admin123`**

> Change it immediately in **Settings → Change Admin Password** after your first login.

---

## 📖 How to Use the Admin Panel

### Adding an Affiliate
1. Go to **admin.html → Affiliates**
2. Fill in: Affiliate ID, Name, Promo Code, Player Link, APK Link, iOS Link
3. Click **Save Affiliate**

### Uploading a Banner
1. Go to **Banners**
2. Select Language and type (Dated or Evergreen)
3. Set date range (for dated banners)
4. Upload your banner image
5. **Drag on the preview** to mark the promo code area
6. Adjust font size and color
7. Click **Save Banner**

### Adding/Editing Captions
1. Go to **Texts**
2. Select language, write caption using placeholders:
   - `{{Player link}}` — replaced with affiliate's referral link
   - `{{apk link}}` — Android download link
   - `{{iOS link}}` — iOS download link
   - `{{Promo code}}` — affiliate's promo code

### Exporting/Backing Up Data
1. Go to **Settings → Export All Data**
2. Save the `.json` file safely
3. Use **Import Data** to restore on any device

---

## 🔄 Updating Files on GitHub

When you want to update the website:
1. Go to your repository on GitHub
2. Click on `index.html` or `admin.html`
3. Click the **pencil icon** (Edit)
4. Make changes
5. Click **Commit changes**

Or simply re-upload the file to replace it.

---

## ⚠️ Important Notes

- **Data is stored in the browser** (localStorage). This means:
  - Data is saved on the device/browser where you added it
  - Use **Export Data** regularly as backup
  - Use **Import Data** to load your backup on a new device
  - Clearing browser cache will clear the data — always export first!

- **Expired banners** are automatically removed when affiliates view the portal

- **The admin panel is public** by URL — keep the URL private and use a strong password

---

## 💡 Tips

- Use the **Export/Import** feature to sync data across devices
- Change your admin password immediately after setup
- For best results, upload banners as PNG files
- Test with a sample affiliate ID before sharing with your team
