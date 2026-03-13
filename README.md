# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




🎯 OVERALL FOUNDATION
🌌 Background (Whole Page)

Use a deep layered gradient:

background: linear-gradient(
  135deg,
  #0F172A 0%,
  #1E293B 50%,
  #0B1120 100%
);


This creates depth so glass elements actually look like glass.

🧭 1️⃣ NAVBAR
Background (Glass)
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(255, 255, 255, 0.12);

Logo Text
color: #F1F5F9;
font-weight: 600;

Nav Links
Normal: #CBD5E1
Hover: #6366F1
Active: #818CF8

Button in Navbar (Hire Me / Contact)
Background: #6366F1
Text: #FFFFFF
Hover: #818CF8
Shadow: 0 4px 20px rgba(99, 102, 241, 0.4);


⚠️ Don’t make navbar fully solid. It must feel floating.

🏠 2️⃣ HERO SECTION
Section Background

Keep original page gradient (no extra background).

Headline
color: #F8FAFC;

Subheading
color: #94A3B8;

Highlighted Name or Keyword
color: #6366F1;

Primary Button
Background: #6366F1
Hover: #818CF8
Text: white

Secondary Button (Outline Style)
Border: 1px solid #6366F1
Text: #6366F1
Hover Background: rgba(99, 102, 241, 0.1);

🪟 3️⃣ GLASS CARDS (Projects / Skills / About)
Card Background
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(18px);
border: 1px solid rgba(255, 255, 255, 0.15);
border-radius: 20px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

Card Title
color: #F1F5F9;

Card Description
color: #94A3B8;

Hover Effect
transform: translateY(-6px);
border: 1px solid rgba(99, 102, 241, 0.4);


Subtle. Not dramatic.

🛠 4️⃣ SKILLS SECTION
Skill Tags
background: rgba(99, 102, 241, 0.15);
color: #818CF8;
border: 1px solid rgba(99, 102, 241, 0.3);


Hover:

Background: #6366F1
Color: white

📂 5️⃣ PROJECT CARDS

Same glass style.

Project Button (View Live / GitHub)
Background: #22D3EE
Text: #0F172A
Hover: #67E8F9


This cyan accent gives tech feel without being childish.

✉️ 6️⃣ CONTACT FORM
Input Fields
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.15);
color: #F1F5F9;

Placeholder
color: #64748B;

On Focus
border: 1px solid #6366F1;
box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);

Submit Button

Same as primary button.

👣 7️⃣ FOOTER

Make it slightly darker than navbar.

background: rgba(0, 0, 0, 0.3);
backdrop-filter: blur(15px);
border-top: 1px solid rgba(255, 255, 255, 0.08);

Footer Text
#94A3B8

Social Icons
Normal: #CBD5E1
Hover: #6366F1

🎨 COLOR HIERARCHY (IMPORTANT)

If everything is indigo, nothing stands out.

Use this rule:

70% → Dark background tones

20% → Glass surfaces

10% → Accent (Indigo)

That’s discipline.

🚫 What You Must Avoid

Be honest with yourself:

Don’t use gradients on buttons.

Don’t use glow everywhere.

Don’t animate everything.

Don’t mix purple + blue + green randomly.

Restraint = professionalism.