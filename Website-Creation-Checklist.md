# Website Creation Checklist
## Build & Host a Website with Claude Code + GitHub Pages + Custom Domain

*A reusable, step-by-step checklist for creating any website from scratch — no coding required.*

---

## PHASE 1: Prerequisites

- [ ] **Claude Pro or Max subscription** — Sign up at claude.com ($20/mo Pro or $100/mo Max)
- [ ] **Claude desktop app installed** — Download from claude.com/download
- [ ] **Identify your domain registrar** — Know where your domain is hosted (Hostinger, GoDaddy, Namecheap, etc.)
- [ ] **Decide on the website type** — Business site, portfolio, blog, landing page, etc.
- [ ] **List the pages you need** — e.g., Home, About, Services, Contact, Blog

---

## PHASE 2: Create a Free GitHub Account

- [ ] Go to **github.com** → Click **Sign up**
- [ ] Enter your email, pick a username, create a password
- [ ] Complete the verification puzzle
- [ ] Confirm your email address

---

## PHASE 3: Connect GitHub to Claude

- [ ] Open Claude desktop app
- [ ] Click **profile icon** (bottom left) → **Settings**
- [ ] Go to **Connectors** → **Browse connectors**
- [ ] Search for **GitHub** → Click **Connect**
- [ ] Sign in with your GitHub account when prompted

---

## PHASE 4: Install VS Code + Claude Code Extension

- [ ] Download VS Code from **code.visualstudio.com** → Install it
- [ ] Open VS Code → Click **Extensions icon** (left sidebar, 4 small squares)
- [ ] Search for **"Claude Code"** by Anthropic → Click **Install**
- [ ] Sign in with your Anthropic account
- [ ] In Claude Code extension settings, turn on **"Skip Permissions"**
- [ ] When starting a new session, confirm **"Bypass permissions"** is enabled

---

## PHASE 5: Prepare Your Project Folder

- [ ] Create a new folder on your PC (e.g., `my-website`)
- [ ] Inside it, create **about-me.md** with:
  - [ ] Business/project name
  - [ ] What the business does
  - [ ] List of pages needed
  - [ ] Brand colours (if any)
  - [ ] Text/content for the website
- [ ] Add your **logo** to the folder (if you have one)
- [ ] Add **screenshot references** of website designs you like

---

## PHASE 6: Build the Website with Claude Code

- [ ] Open VS Code → **File → Open Folder** → select your project folder
- [ ] Open Claude Code panel → Start a new session
- [ ] Select **Opus 4.6** as the model
- [ ] Ensure **Bypass permissions** is on
- [ ] Type your prompt using this template:

```
Create a GitHub repo named "[repo-name]".

I do not know how to code and don't want to learn.
Code everything for me. Do not ask for permissions
(or as little as possible).

Follow these instructions:

1. I want a professional [type] website for [NAME] — a [DESCRIPTION] company.
2. Pages needed: [list your pages].
3. Read the files in my folder first for content and brand details.
4. Make it mobile-friendly and modern-looking.
```

- [ ] If you have a reference screenshot, drag it into the chat along with the prompt
- [ ] Let Claude Code build the site

---

## PHASE 7: Review and Iterate

- [ ] Ask Claude Code: *"I need a live link now so anyone can access it."*
- [ ] Open the preview link in your browser
- [ ] Check every page on **desktop and mobile**
- [ ] Note down issues → Type fixes as a numbered list in Claude Code
- [ ] Repeat until satisfied
- [ ] Fix clean URLs — ask Claude Code to restructure files into folders (e.g., `/about/index.html` instead of `about.html`)

---

## PHASE 8: Create a CLAUDE.md Memory File

- [ ] Paste this into Claude Code after your first session:

```
Create a CLAUDE.md file in the root of this project.
Inside it, write down everything you've learned about
this project so far: the folder structure, what each
file does, the design choices, fonts, colours, layout,
and what pages exist.
```

- [ ] This ensures Claude remembers your project next time you open it

---

## PHASE 9: Enable GitHub Pages

- [ ] Go to **github.com** → Open your repository
- [ ] Click **Settings** → **Pages** (left sidebar)
- [ ] Under **Source**, select branch (**main**) and folder (**/ root**)
- [ ] Click **Save**
- [ ] Confirm site is live at `https://yourusername.github.io/repo-name`

---

## PHASE 10: Backup Existing Site (If Replacing an Existing Domain)

> **Skip this phase if you're using a brand new domain with no existing website.**

- [ ] Log in to your hosting panel
- [ ] Download a **full backup** of your existing site (files + database)
- [ ] In WordPress: **Tools → Export → All content → Download Export File**
- [ ] Save backups to your PC **and** a cloud drive (Google Drive, etc.)
- [ ] Note down any important old URLs that had good traffic (for redirects later)

---

## PHASE 11: Connect Your Custom Domain — DNS Configuration

### Step A: Add Domain in GitHub (Do This First)

- [ ] In your repo → **Settings** → **Pages**
- [ ] Under **Custom domain**, type your domain (e.g., `yourdomain.com`)
- [ ] Click **Save**

### Step B: Identify DNS Records to Keep vs Delete

- [ ] Log in to your domain registrar's DNS settings
- [ ] Screenshot ALL existing DNS records before making changes
- [ ] **KEEP all email-related records:**
  - [ ] All records with "hostingermail", "mail", "_domainkey" in the name
  - [ ] All MX records
  - [ ] All TXT records (SPF, DKIM, DMARC)
  - [ ] Records with "autodiscover" or "autoconfig" in the name
- [ ] **DELETE only website-serving records:**
  - [ ] A record: Name = @, pointing to old hosting IP
  - [ ] AAAA record: Name = @, pointing to old hosting IPv6
  - [ ] CNAME record: Name = www, pointing to old domain
  - [ ] A/AAAA records for subdomains you no longer need (blog, ftp, etc.)
- [ ] **DO NOT delete** anything you're unsure about — ask first

### Step C: Add New GitHub Pages DNS Records

- [ ] Add **4 A records** (Name = @, TTL = 3600):

| Type | Name | Points to       |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

- [ ] Add **1 CNAME record** (TTL = 3600):

| Type  | Name | Points to              |
|-------|------|------------------------|
| CNAME | www  | yourusername.github.io |

### Step D: Activate HTTPS

- [ ] Wait for DNS propagation (5 minutes to 24 hours)
- [ ] Go to GitHub → **Settings** → **Pages**
- [ ] If "Enforce HTTPS" is greyed out: remove domain, wait 30 seconds, re-add it
- [ ] Check the **Enforce HTTPS** box
- [ ] Test site in incognito to confirm HTTPS works

---

## PHASE 12: Fix Mixed Content Warning

- [ ] After HTTPS is active, check if the lock icon shows properly
- [ ] If Chrome shows "Connection is not secure" despite HTTPS, ask Claude Code:

```
My website is showing a "mixed content" warning in Chrome. 
Scan every HTML and CSS file and replace all "http://" URLs 
with "https://" for external resources. For local resources, 
use relative paths. Push to GitHub.
```

- [ ] Hard refresh (Ctrl + Shift + R) and verify lock icon appears
- [ ] If it only works in incognito, clear browser cache (Ctrl + Shift + Delete)

---

## PHASE 13: SEO Setup

### Step A: Create SEO Files via Claude Code

- [ ] Paste this into Claude Code:

```
Do the following SEO optimizations for my website at https://[yourdomain]:

1. SITEMAP: Create a sitemap.xml listing every page with lastmod dates 
   and priority values (homepage = 1.0, main pages = 0.8, blog posts = 0.6).

2. ROBOTS.TXT: Create a robots.txt allowing all crawlers and pointing 
   to the sitemap URL.

3. META TAGS on every page:
   - Unique <title> (under 60 characters, include brand name)
   - Unique <meta name="description"> (under 155 characters)
   - <meta name="keywords">
   - <meta name="viewport"> for mobile
   - Canonical URL tag
   - Open Graph tags (og:title, og:description, og:image, og:url, og:type)
   - Twitter card meta tags

4. STRUCTURED DATA (JSON-LD):
   - Homepage: Organization schema
   - Services page: Service schema
   - Contact page: LocalBusiness schema
   - Blog posts: Article schema

5. HEADINGS: Ensure one <h1> per page with proper <h2>, <h3> hierarchy.

6. IMAGE ALT TAGS: Add descriptive alt text to every image.

7. Push all changes to GitHub.
```

### Step B: Google Search Console Setup (Manual)

- [ ] Go to **search.google.com/search-console**
- [ ] Click **Add property** → select **Domain** → enter your domain
- [ ] Choose **DNS verification** → copy the TXT record value
- [ ] Add TXT record in your domain registrar DNS (Name = @, paste value)
- [ ] Wait for verification (can take a few minutes)
- [ ] Go to **Sitemaps** → submit `https://yourdomain/sitemap.xml`
- [ ] Go to **URL Inspection** → paste each page URL → click **Request Indexing**

### Step C: Handle Old Indexed Pages (If Replacing an Existing Site)

- [ ] Search Google for `site:yourdomain` to see old indexed pages
- [ ] Create a custom 404 page via Claude Code:

```
Create a custom 404.html page that shows a friendly 
"Page not found" message, explains the site has been 
redesigned, and includes navigation links to the main 
pages. Match the design of the rest of the site. 
Push to GitHub.
```

- [ ] In Google Search Console → **Removals** → submit old URLs for de-indexing
- [ ] For important old pages with traffic, create meta-refresh redirects via Claude Code

---

## PHASE 14: Post-Launch Verification Checklist

- [ ] Site loads on **desktop** — Chrome, Firefox, Edge
- [ ] Site loads on **mobile** — Android Chrome, iOS Safari
- [ ] **HTTPS lock icon** shows properly (no mixed content warnings)
- [ ] All **navigation links** work (no broken links or 404s)
- [ ] **Images** load correctly on all pages
- [ ] **Contact forms** or email links work
- [ ] **Email** on the domain still works (send a test email)
- [ ] Site appears in **Google Search Console** without errors
- [ ] **sitemap.xml** is accessible at yourdomain/sitemap.xml
- [ ] **robots.txt** is accessible at yourdomain/robots.txt
- [ ] **Page speed** is acceptable (test at pagespeed.web.dev)
- [ ] **Mobile responsiveness** looks good (no overlapping elements)
- [ ] Clean URLs (no .html extensions showing in address bar)
- [ ] Open Graph preview works (test by pasting URL in WhatsApp or LinkedIn)

---

## PHASE 15: Ongoing Maintenance

- [ ] To update the site: Open Claude Code → describe changes → Claude pushes to GitHub → site updates automatically
- [ ] Always update **sitemap.xml** when adding new pages or blog posts
- [ ] Check **Google Search Console** monthly for crawl errors
- [ ] Monitor **page speed** periodically at pagespeed.web.dev
- [ ] Renew your domain before it expires
- [ ] Keep your Claude Code CLAUDE.md file updated for project continuity

---

## Quick Reference: Useful Prompts for Claude Code

**Add a new page:**
```
Add a new page called [page name] to the website. Include it 
in the navigation header. [Describe what the page should contain]. 
Update the sitemap.xml. Push to GitHub.
```

**Add a blog post:**
```
Create a new blog post titled "[title]". [Paste your content]. 
Add it to the blog listing page and update sitemap.xml. 
Push to GitHub.
```

**Fix a visual bug:**
```
[Screenshot attached] This section overlaps on mobile. Fix it. 
Push to GitHub.
```

**Change design:**
```
Change the colour scheme to [colours]. Update all pages 
consistently. Push to GitHub.
```

---

*Generated on March 27, 2026 | Reusable for any static website project*
