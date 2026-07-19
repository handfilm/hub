/* ============================================================
   THE DISTRIBUTED ARCHITECTURE — LANGUAGE ENGINE
   Vanilla JS EN/BN dictionary + instant DOM-text swap.
   No reload, no frameworks, no external i18n libraries.
============================================================ */
(function(){
  'use strict';

  const DICT = {
    en: {
      'nav.role': 'WORKFLOW ARCHITECT',
      'nav.sig': 'SIG: 4-STAGE',

      'rail.01': 'SHEETS',
      'rail.02': 'API ENGINE',
      'rail.03': 'CLOUD IDE',
      'rail.04': 'TACTICAL',

      'hero.eyebrow': 'FIELD NOTES // RAKIB HIMON',
      'hero.title': 'THE DISTRIBUTED ARCHITECTURE',
      'hero.subtitle': 'Building an Autonomous 4-App Ecosystem',
      'hero.byline': 'Rakib Himon — Creative Operator, Automation Architect',
      'hero.location': 'DHAKA, BD',

      's1.eyebrow': '01 // THE PROBLEM',
      's1.title': "The Body Wasn't Built for One Chair",
      's1.p1': 'Eleven hours into a color grade, the pain stops being about the work and starts being about the chair. Stiff shoulders. A locked lower back. Eyes that have stared at the same 27-inch panel since sunrise. For years the assumption in this industry was simple: real work happens at a desk, on a machine powerful enough to carry it, and everything else is a compromise. That assumption is what breaks bodies.',
      's1.p2': "The fix isn't a better chair. It's refusing to let one machine be the only place work can happen. A distributed workflow means the work follows the operator, not the other way around — from the studio, to a client's office, to a rooftop at midnight when the only thing open is a laptop and a coffee.",
      's1.fig': 'FIG. 01 // THE OPERATOR, REVIEWING',
      's1.p3': 'Three devices, three jobs — one autonomous chain of command.',
      's1.pc': 'The Heavy-Lifting Command Center',
      's1.pcBody': 'The only machine trusted with 2TB of visual archive and the compute weight of a full presentation build.',
      's1.tablet': 'The Client Presentation Layer',
      's1.tabletBody': 'Light enough to hand across a table, fast enough to open a live deck without apology.',
      's1.phone': 'The Tactical Handgun',
      's1.phoneBody': 'Always holstered, always loaded — never the primary weapon, but never far from the hand.',

      's2.eyebrow': '02 // THE SHIFT',
      's2.title': 'From Local Drives to a Cloud-First Spine',
      's2.fig': 'FIG. 02 // THE LOAD-BEARING LAYER',
      's2.p1': "An external hard drive is not a strategy. It's a single point of failure with a USB cable. The old habit — copy the shoot to the laptop, copy the laptop to a backup drive, hope nothing dies before the next copy — collapses the moment two devices need to see the same file at once.",
      's2.p2': 'The fix was to stop treating cloud storage as a backup and start treating it as the spine. Google Drive now holds the entire visual archive: raw stills, graded video, source files, the works. Every device — desk, tablet, phone — points at the same folder IDs. There is no "which laptop has the latest version" anymore, because there is only one version, and it lives in the cloud, not on any single machine.',
      's2.p3': 'This one decision is what makes the rest of the ecosystem possible. Once the data has a permanent, device-agnostic home, every other tool in the stack can be swapped, upgraded, or replaced without anything downstream breaking.',

      's3.eyebrow': '03 // THE STACK',
      's3.title': 'Four Apps, One Autonomous Pipeline',
      's3.fig': 'FIG. 03 // THE FULL PIPELINE, END TO END',
      's3.p1': 'Four ordinary apps, none of them built for this purpose, wired together into something none of them do alone: a pipeline that fetches data, generates an API, syncs to the cloud, and deploys from a phone — with no dedicated backend and no server to maintain.',

      's3.sheets.title': 'Google Sheets — The Database',
      's3.sheets.p1': 'No schema migrations. No code editor. A spreadsheet is the fastest database a one-person studio will ever need — every asset, every project, every client note logged as a row anyone on the team can add to from a phone, in transit, without touching a line of code.',
      's3.sheets.p2': "It isn't elegant. It's fast, forgiving, and already installed on every device in the ecosystem — which makes it the correct choice, not the compromise.",

      's3.gas.title': 'Google Apps Script — The API Engine',
      's3.gas.p1': 'A single doGet() function turns that spreadsheet into a live, structured JSON feed — reachable from anywhere, updating the moment a row changes, with zero servers to patch or pay for.',
      's3.gas.p2': 'This is the quiet middleware layer of the whole ecosystem: not glamorous, barely visible, and the exact reason every other app in the stack can talk to the same source of truth without knowing anything about a spreadsheet.',
      's3.gas.fig': 'FIG. 04 // THE MIDDLEWARE, LIVE',

      's3.codespaces.title': 'GitHub Codespaces — The Cloud IDE',
      's3.codespaces.p1': "The local editor is gone. In its place: a full, high-end VS Code environment running in the browser, identical whether it's opened from the studio's main tower or a borrowed laptop in a client's lobby.",
      's3.codespaces.p2': 'Heavy architecture work — the actual engineering of the 4-app ecosystem itself — happens here, in a container that spins up on demand and never depends on which physical machine is nearby.',
      's3.codespaces.fig': 'FIG. 05 // THE CLOUD, AS WORKSTATION',

      's3.termux.title': 'Termux & Spck Editor — The Tactical Command',
      's3.termux.p1': 'The phone stops being a viewer and becomes a real terminal. Termux turns Android into a raw command line — git push from a pocket, a quick fix shipped between meetings, an SSH session into deeper infrastructure without ever opening a laptop.',
      's3.termux.p2': "Spck Editor covers what Termux alone can't: syntax-highlighted edits and Git operations through an actual interface, for the moments a raw shell isn't fast enough. Together they make the phone the last mile of the pipeline — the tactical handgun, always holstered, always ready to fire a deploy.",
      's3.termux.fig': 'FIG. 06 // THE LAST MILE, IN A POCKET',

      's4.eyebrow': '04 // THE TAKEAWAY',
      's4.title': 'Autonomy Is an Architecture, Not a Habit',
      's4.p1': "None of this exists to look impressive on a diagram. It exists so an eleven-hour render doesn't have to happen in one chair, so a bug fix doesn't have to wait for a laptop to open, so a client demo can run from whatever device is already in the room.",
      's4.p2': 'The tablet, in this ecosystem, earns its keep as the presentation layer — the device that opens a live deck for a buyer without ever touching the machine that built it. That separation of duty, more than any single tool, is the actual architecture: not one powerful machine doing everything, but four ordinary ones, each doing exactly one job well.',
      's4.p3': "Build the pipeline once, and the body stops paying the price for the work.",

      'footer.byline': 'RAKIB HIMON // CREATIVE OPERATOR — AUTOMATION ARCHITECT',
      'footer.origin': 'DHAKA, BANGLADESH'
    },

    bn: {
      'nav.role': 'ওয়ার্কফ্লো আর্কিটেক্ট',
      'nav.sig': 'সিগ: ৪-স্তর',

      'rail.01': 'শীটস',
      'rail.02': 'এপিআই ইঞ্জিন',
      'rail.03': 'ক্লাউড আইডিই',
      'rail.04': 'ট্যাকটিক্যাল',

      'hero.eyebrow': 'ফিল্ড নোটস // রাকিব হিমন',
      'hero.title': 'বিকেন্দ্রীভূত আর্কিটেকচার',
      'hero.subtitle': 'একটি স্বয়ংক্রিয় ৪-অ্যাপ ইকোসিস্টেম তৈরির গল্প',
      'hero.byline': 'রাকিব হিমন — ক্রিয়েটিভ অপারেটর, অটোমেশন আর্কিটেক্ট',
      'hero.location': 'ঢাকা, বাংলাদেশ',

      's1.eyebrow': '০১ // সমস্যা',
      's1.title': 'শরীর একটি চেয়ারের জন্য তৈরি হয়নি',
      's1.p1': 'কালার গ্রেডিংয়ের এগারো ঘণ্টা পর ব্যথাটা আর কাজের থাকে না, চেয়ারের হয়ে যায়। শক্ত হয়ে যাওয়া কাঁধ। আটকে থাকা কোমর। সূর্যোদয় থেকে একই ২৭-ইঞ্চি প্যানেলের দিকে তাকিয়ে থাকা চোখ। বছরের পর বছর এই শিল্পে একটা সহজ ধারণা প্রচলিত ছিল — আসল কাজ হয় শুধু ডেস্কে বসে, এমন একটা মেশিনে যা সেই ভার বহন করতে সক্ষম, বাকি সবকিছুই একটা আপস। এই ধারণাটাই শরীর ভেঙে দেয়।',
      's1.p2': 'সমাধানটা আরেকটা ভালো চেয়ার নয়। সমাধান হলো — একটামাত্র মেশিনকেই কাজের একমাত্র জায়গা হতে না দেওয়া। একটা বিকেন্দ্রীভূত ওয়ার্কফ্লো মানে কাজ অপারেটরকে অনুসরণ করে, উল্টোটা নয় — স্টুডিও থেকে ক্লায়েন্টের অফিস, মাঝরাতে ছাদ পর্যন্ত, যেখানে খোলা থাকে শুধু একটা ল্যাপটপ আর এক কাপ কফি।',
      's1.fig': 'চিত্র ০১ // অপারেটর, পর্যালোচনায়',
      's1.p3': 'তিনটি ডিভাইস, তিনটি কাজ — একটিমাত্র স্বয়ংক্রিয় কমান্ড চেইন।',
      's1.pc': 'ভারী কাজের কমান্ড সেন্টার',
      's1.pcBody': 'একমাত্র মেশিন, যাকে ভরসা করা হয় ২ টেরাবাইট ভিজ্যুয়াল আর্কাইভ আর সম্পূর্ণ প্রেজেন্টেশন তৈরির পুরো কম্পিউটেশনাল চাপ সামলাতে।',
      's1.tablet': 'ক্লায়েন্ট প্রেজেন্টেশন লেয়ার',
      's1.tabletBody': 'এত হালকা যে টেবিলের ওপার হাতে তুলে দেওয়া যায়, এত দ্রুত যে বিনা দ্বিধায় লাইভ ডেক খুলে ফেলা যায়।',
      's1.phone': 'ট্যাকটিক্যাল হ্যান্ডগান',
      's1.phoneBody': 'সবসময় হোলস্টারে, সবসময় লোড করা — কখনো প্রধান অস্ত্র নয়, কিন্তু হাত থেকে কখনোই বেশি দূরে নয়।',

      's2.eyebrow': '০২ // পরিবর্তন',
      's2.title': 'লোকাল ড্রাইভ থেকে ক্লাউড-ফার্স্ট মেরুদণ্ডে',
      's2.fig': 'চিত্র ০২ // ভার-বহনকারী স্তর',
      's2.p1': 'একটা এক্সটার্নাল হার্ড ড্রাইভ কোনো কৌশল নয়। এটা একটা ইউএসবি ক্যাবল লাগানো একক ব্যর্থতার বিন্দু মাত্র। পুরনো অভ্যাস — শুটের ফাইল ল্যাপটপে কপি করা, ল্যাপটপ থেকে ব্যাকআপ ড্রাইভে কপি করা, আর পরের কপির আগে কিছু নষ্ট না হওয়ার আশা করা — এই অভ্যাসটা ভেঙে পড়ে ঠিক তখনই, যখন দুটো ডিভাইসের একসাথে একই ফাইল দেখার দরকার হয়।',
      's2.p2': 'সমাধান ছিল ক্লাউড স্টোরেজকে ব্যাকআপ হিসেবে না দেখে, মেরুদণ্ড হিসেবে দেখা শুরু করা। গুগল ড্রাইভ এখন পুরো ভিজ্যুয়াল আর্কাইভ ধরে রাখে — কাঁচা স্টিল, গ্রেড করা ভিডিও, সোর্স ফাইল, সবকিছু। প্রতিটা ডিভাইস — ডেস্ক, ট্যাবলেট, ফোন — একই ফোল্ডার আইডি নির্দেশ করে। এখন আর "কোন ল্যাপটপে সর্বশেষ ভার্সনটা আছে" এই প্রশ্ন ওঠে না, কারণ ভার্সন আছে একটাই, আর সেটা থাকে ক্লাউডে, কোনো একটামাত্র মেশিনে নয়।',
      's2.p3': 'এই একটামাত্র সিদ্ধান্তই বাকি পুরো ইকোসিস্টেমকে সম্ভব করে তোলে। একবার ডেটার একটা স্থায়ী, ডিভাইস-নিরপেক্ষ ঠিকানা তৈরি হয়ে গেলে, স্ট্যাকের বাকি যেকোনো টুল বদলানো, আপগ্রেড করা বা প্রতিস্থাপন করা যায় — পরবর্তী কোনো ধাপ ভেঙে না দিয়েই।',

      's3.eyebrow': '০৩ // দ্য স্ট্যাক',
      's3.title': 'চারটি অ্যাপ, একটি স্বয়ংক্রিয় পাইপলাইন',
      's3.fig': 'চিত্র ০৩ // সম্পূর্ণ পাইপলাইন, শুরু থেকে শেষ',
      's3.p1': 'চারটি সাধারণ অ্যাপ — কোনোটাই এই উদ্দেশ্যে তৈরি হয়নি — একসাথে জোড়া লেগে এমন কিছু তৈরি করে যা এদের কেউই একা করতে পারে না: একটা পাইপলাইন যা ডেটা টেনে আনে, একটা এপিআই তৈরি করে, ক্লাউডে সিঙ্ক করে, আর ফোন থেকেই ডিপ্লয় করে — কোনো ডেডিকেটেড ব্যাকএন্ড ছাড়াই, কোনো সার্ভার মেইনটেইন না করেই।',

      's3.sheets.title': 'গুগল শীটস — দ্য ডেটাবেজ',
      's3.sheets.p1': 'কোনো স্কিমা মাইগ্রেশন নেই। কোনো কোড এডিটর নেই। একজনের স্টুডিওর জন্য একটা স্প্রেডশিটই সবচেয়ে দ্রুততম ডেটাবেজ — প্রতিটা অ্যাসেট, প্রতিটা প্রজেক্ট, প্রতিটা ক্লায়েন্ট নোট একটা সারি হিসেবে লগ হয়, যা টিমের যে কেউ ফোন থেকে, চলার পথে, একটা লাইন কোডও না ছুঁয়ে যোগ করতে পারে।',
      's3.sheets.p2': 'এটা মার্জিত নয়। কিন্তু এটা দ্রুত, ক্ষমাশীল, আর ইকোসিস্টেমের প্রতিটা ডিভাইসে আগে থেকেই ইনস্টল করা — যা একে সঠিক পছন্দ বানায়, কোনো আপস নয়।',

      's3.gas.title': 'গুগল অ্যাপস স্ক্রিপ্ট — দ্য এপিআই ইঞ্জিন',
      's3.gas.p1': 'একটামাত্র doGet() ফাংশন সেই স্প্রেডশিটকে বানিয়ে দেয় একটা লাইভ, স্ট্রাকচার্ড জেসন ফিড — যেকোনো জায়গা থেকে যা পৌঁছানো যায়, সারিতে পরিবর্তন হওয়া মাত্র যা আপডেট হয়, আর প্যাচ করা বা টাকা দেওয়ার মতো কোনো সার্ভার ছাড়াই।',
      's3.gas.p2': 'এটাই পুরো ইকোসিস্টেমের নীরব মিডলওয়্যার স্তর — চাকচিক্যহীন, প্রায় অদৃশ্য, কিন্তু ঠিক এই কারণেই স্ট্যাকের বাকি প্রতিটা অ্যাপ একই সোর্স অফ ট্রুথের সাথে কথা বলতে পারে, একটা স্প্রেডশিট সম্পর্কে কিছু না জেনেই।',
      's3.gas.fig': 'চিত্র ০৪ // মিডলওয়্যার, লাইভ',

      's3.codespaces.title': 'গিটহাব কোডস্পেসেস — দ্য ক্লাউড আইডিই',
      's3.codespaces.p1': 'লোকাল এডিটর আর নেই। তার জায়গায় এখন — ব্রাউজারে চলা একটা সম্পূর্ণ, হাই-এন্ড ভিএস কোড এনভায়রনমেন্ট, যা স্টুডিওর মূল টাওয়ার থেকে খোলা হোক বা ক্লায়েন্টের লবিতে ধার করা কোনো ল্যাপটপ থেকে — দুই ক্ষেত্রেই একই রকম।',
      's3.codespaces.p2': 'ভারী স্থাপত্যের কাজ — এই ৪-অ্যাপ ইকোসিস্টেমের প্রকৃত ইঞ্জিনিয়ারিং — ঘটে ঠিক এখানে, এমন একটা কন্টেইনারে যা প্রয়োজন অনুযায়ী চালু হয়ে যায়, আর কোন ফিজিক্যাল মেশিন কাছে আছে তার ওপর কখনোই নির্ভর করে না।',
      's3.codespaces.fig': 'চিত্র ০৫ // ক্লাউড, ওয়ার্কস্টেশন হিসেবে',

      's3.termux.title': 'টার্মাক্স ও Spck এডিটর — দ্য ট্যাকটিক্যাল কমান্ড',
      's3.termux.p1': 'ফোনটা আর শুধু দেখার যন্ত্র থাকে না, হয়ে ওঠে একটা আসল টার্মিনাল। টার্মাক্স অ্যান্ড্রয়েডকে বানিয়ে দেয় একটা কাঁচা কমান্ড লাইন — পকেট থেকেই git push, দুটো মিটিংয়ের মাঝে একটা দ্রুত ফিক্স পাঠানো, ল্যাপটপ না খুলেই গভীর ইনফ্রাস্ট্রাকচারে একটা এসএসএইচ সেশন।',
      's3.termux.p2': 'Spck এডিটর সেই কাজটা করে যা শুধু টার্মাক্স দিয়ে হয় না — সিনট্যাক্স-হাইলাইটেড এডিট আর গিট অপারেশন, একটা আসল ইন্টারফেসের মাধ্যমে, যখন কাঁচা শেল যথেষ্ট দ্রুত নয়। দুটো মিলে ফোনকে বানিয়ে দেয় পাইপলাইনের শেষ ধাপ — সেই ট্যাকটিক্যাল হ্যান্ডগান, সবসময় হোলস্টারে, সবসময় একটা ডিপ্লয় চালানোর জন্য প্রস্তুত।',
      's3.termux.fig': 'চিত্র ০৬ // পকেটে, শেষ ধাপ',

      's4.eyebrow': '০৪ // মূল কথা',
      's4.title': 'স্বয়ংক্রিয়তা একটি স্থাপত্য, অভ্যাস নয়',
      's4.p1': 'এসবের কোনোটাই কোনো ডায়াগ্রামে দেখতে চমৎকার লাগার জন্য তৈরি হয়নি। এগুলো তৈরি হয়েছে যাতে এগারো ঘণ্টার একটা রেন্ডার একটামাত্র চেয়ারে বসে করতে না হয়, যাতে একটা বাগ ফিক্সের জন্য ল্যাপটপ খোলার অপেক্ষা করতে না হয়, যাতে ঘরে যে ডিভাইসটা আগে থেকেই আছে সেটা দিয়েই একটা ক্লায়েন্ট ডেমো চালানো যায়।',
      's4.p2': 'এই ইকোসিস্টেমে ট্যাবলেট নিজের জায়গা অর্জন করে প্রেজেন্টেশন লেয়ার হিসেবে — যে ডিভাইস একজন বায়ারের জন্য লাইভ ডেক খুলে দেয়, অথচ যে মেশিনটা সেটা তৈরি করেছে তাকে কখনো স্পর্শও করতে হয় না। এই দায়িত্ব বণ্টনটাই — যেকোনো একক টুলের চেয়ে বেশি — আসল স্থাপত্য: একটামাত্র শক্তিশালী মেশিন সবকিছু করছে না, বরং চারটা সাধারণ মেশিন, প্রতিটা ঠিক একটা করে কাজ ভালোভাবে করছে।',
      's4.p3': 'পাইপলাইনটা একবার তৈরি করে ফেলো, তারপর শরীরকে আর কাজের জন্য মূল্য দিতে হবে না।',

      'footer.byline': 'রাকিব হিমন // ক্রিয়েটিভ অপারেটর — অটোমেশন আর্কিটেক্ট',
      'footer.origin': 'ঢাকা, বাংলাদেশ'
    }
  };

  /* ============================================================
     LANGUAGE TOGGLE
  ============================================================ */
  let currentLang = 'en';
  const STORAGE_KEY = 'workflow_architect_lang';

  function applyLang(lang){
    const dict = DICT[lang] || DICT.en;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined){
        el.textContent = dict[key];
      }
    });

    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('lang-bn', lang === 'bn');
    document.getElementById('htmlRoot').setAttribute('lang', lang);

    document.querySelectorAll('[data-lang-btn]').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function toggleLang(){
    applyLang(currentLang === 'en' ? 'bn' : 'en');
  }

  document.addEventListener('DOMContentLoaded', function(){
    let saved = 'en';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch(e){}
    applyLang(saved);

    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleLang);
  });

  /* ============================================================
     STAGE RAIL — SCROLL SPY
  ============================================================ */
  document.addEventListener('DOMContentLoaded', function(){
    const stageBlocks = document.querySelectorAll('.stage-block[id]');
    const railNodes = document.querySelectorAll('.rail-node[data-stage]');
    if (!stageBlocks.length || !railNodes.length) return;

    const stageOrder = ['sheets', 'appsscript', 'codespaces', 'termux'];

    const io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        const idx = stageOrder.indexOf(entry.target.id);
        if (idx === -1) return;
        railNodes.forEach(function(node){
          node.classList.toggle('active', parseInt(node.dataset.stage, 10) === idx + 1);
        });
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    stageBlocks.forEach(function(block){ io.observe(block); });
  });

  /* ============================================================
     SYSTEM CLOCK READOUT
  ============================================================ */
  function updateClock(){
    const el = document.getElementById('sysClock');
    if (!el) return;
    const now = new Date();
    const pad = function(n){ return String(n).padStart(2, '0'); };
    el.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  }
  document.addEventListener('DOMContentLoaded', function(){
    updateClock();
    setInterval(updateClock, 1000);
  });

})();
