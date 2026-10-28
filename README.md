# Explained

**Highlight a phrase. Understand it in context. Keep reading.**

[Visit Explained](https://yiqin-codewizard.github.io/explained-site/) · [Try a practice article](https://yiqin-codewizard.github.io/explained-site/#practice)

## Why I built Explained

I built Explained to make unfamiliar text easier to understand without losing my place in a good read.

Reading about a new subject often brings unfamiliar concepts, technical terms, and acronyms. Each one can become a detour: leave the article, look it up, then find the thread again.

AI can help explain those phrases, and I wanted that help beside the original text. The idea behind Explained is deliberately small: **explain this bit, please. Let me get back to reading.**

So I made a small Chrome extension. Highlight a word or phrase, read an explanation beside the original text, and carry on. Nearby context can help clarify the meaning; a News tab lets you follow the subject further when you're curious.

Explained is for people with the same reading habits: students working through unfamiliar material, analysts exploring a new industry, and researchers following an idea across subjects. The aim is to make a moment of confusion easier to get past, while keeping the reader's attention on the text.

## Try it

Visit the [landing page](https://yiqin-codewizard.github.io/explained-site/) for installation instructions and the extension download. The **Pick a story. Find a new idea.** section has three short research excerpts from Anthropic, OpenAI, and DeepSeek, with original-source links and translated Chinese editions.

The page is available in English, 简体中文, 繁體中文, and Mixed: English articles with selected Chinese terms. After enabling lookups in the installed extension, highlight any phrase in an article to try it.

This is an experimental extension loaded through Chrome's **Load unpacked** option. It uses your DeepSeek website session; no official paid API key is required. DeepSeek's own usage limits still apply. With lookups enabled, highlighting sends the selected text and any enabled nearby context to DeepSeek. The shared privacy notice distinguishes Explained, Explained Yellow and extension-wasm-offline, including website authentication and each computation route. Read the [privacy notice](https://yiqin-codewizard.github.io/explained-site/privacy.html) before enabling lookups.

## About this repository

This is the public repository for the landing page, its practice articles, and the intended extension download. The landing page's **Source on GitHub** links lead here.

GitHub Pages serves the generated static files from the root of `main`. The ZIP in [`downloads/`](downloads/) includes the corresponding extension source, license, and privacy policy, with a SHA-256 checksum alongside it.

Explained is an independent project, with no affiliation with DeepSeek or Google. If something feels clunky, an explanation misses the point, or you have an idea that would make reading easier, [open an issue](https://github.com/yiqin-CodeWizard/explained-site/issues).
