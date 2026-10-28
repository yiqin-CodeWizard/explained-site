# Explained

**Highlight a phrase. Understand it in context. Keep reading.**

[Visit Explained](https://yiqin-codewizard.github.io/explained-site/) · [Try a practice article](https://yiqin-codewizard.github.io/explained-site/try/)

## Why I built Explained

I built Explained to make unfamiliar text easier to understand without losing my place in a good read.

Reading about a new subject often brings unfamiliar concepts, technical terms, and acronyms. Each one can become a detour: leave the article, look it up, then find the thread again.

AI can help explain those phrases, and I wanted that help beside the original text. The idea behind Explained is deliberately small: **explain this bit, please. Let me get back to reading.**

So I made a small Chrome extension. Highlight a word or phrase, read an explanation beside the original text, and carry on. Nearby context can help clarify the meaning; a News tab lets you follow the subject further when you're curious.

Explained is for people with the same reading habits: students working through unfamiliar material, analysts exploring a new industry, and researchers following an idea across subjects. The aim is to make a moment of confusion easier to get past, while keeping the reader's attention on the text.

## Try it

Visit the [download and setup page](https://yiqin-codewizard.github.io/explained-site/download/) for installation instructions and the extension download. The **Pick a story. Find a new idea.** section has three short research readings adapted from Anthropic, OpenAI, and DeepSeek, with original-source links and translated Chinese editions.

The page is available in English, 简体中文, 繁體中文, and Mixed: English articles with selected Chinese terms. After enabling lookups in the installed extension, highlight a phrase, then click the selection icon or press Ctrl+X (⌘X on Mac). Selecting or copying alone sends nothing.

The default download is **extension-wasm-offline v0.2.0**, the Explained API edition, loaded through Chrome's **Load unpacked** option. It requires internet access and your own **DeepSeek API key**. Model and search calls are billed to your DeepSeek API account. Setup verifies the key before enabling lookups. Triggered lookups send selected text and optional nearby context to DeepSeek's official APIs; News, time-sensitive queries and Explain a little more also use web search. The key and preferences stay in local extension storage. The shared privacy notice distinguishes the API edition from the earlier website editions. Read the [privacy notice](https://yiqin-codewizard.github.io/explained-site/privacy.html) before enabling lookups.

Need help? Read the [troubleshooting guide](https://yiqin-codewizard.github.io/explained-site/help/) or [set up a DeepSeek API key](https://yiqin-codewizard.github.io/explained-site/guides/deepseek-api-key/).

## About this repository

This is the public repository for the landing page, its practice articles, and the intended extension download. The landing page's **Source on GitHub** links lead here.

GitHub Pages serves the generated static files from the root of `main`. The ZIP in [`downloads/`](downloads/) includes the corresponding extension source, license, and privacy policy, with a SHA-256 checksum alongside it.

Explained is an independent project, with no affiliation with DeepSeek or Google. If something feels clunky, an explanation misses the point, or you have an idea that would make reading easier, [open an issue](https://github.com/yiqin-CodeWizard/explained-site/issues).
