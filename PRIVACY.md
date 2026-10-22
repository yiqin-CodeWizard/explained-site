# Explained privacy and permissions

Updated 2026-10-22. This policy covers Explained, Explained Yellow and extension-wasm-offline version 0.1.5, and the public Explained website. The maintainer is the independent Explained project under the GitHub account yiqin-CodeWizard. Explained is not affiliated with DeepSeek or Google.

## What you enable

The extension explains highlighted webpage text and can request recent news about that text. Queries use DeepSeek's website service and require network access. In extension-wasm-offline, only the challenge-computation module runs from the local extension package; the AI service is not offline.

No lookup is submitted until you choose Enable lookups in the welcome setup or toolbar. Once enabled, highlighting a supported selection automatically starts Explain. Switching to News starts a search; switching back can reuse the current answer. Enabling itself, opening the DeepSeek page, or returning to a reading page does not submit the previous selection. An interrupted lookup requires Retry or a new selection. You may skip setup or pause lookups at any time.

## Selected content, context and activity

A lookup sends your selected text, up to 500 characters, and, if enabled, up to 600 characters of nearby context to DeepSeek, together with instructions for the requested mode, language and answer length. DeepSeek sends back an answer and any available news-search metadata for display beside your selection.

The extension inspects the selection and nearby rendered page content locally to build that bounded request. Turning nearby context off prevents its transmission; it does not prevent all local DOM inspection around a selection. You can inspect the transmitted context using Context used. Standard input fields, editable regions and hidden text are excluded where supported page structures identify them; unusual editors and custom structures may not be recognized.

The extension processes selection, pointer and keyboard events to open, position, operate and dismiss the reading card. It does not record an interaction log or send click, key, pointer-position or usage telemetry to the developer. It uses the current page's URL/origin locally to check support and permissions, display site controls, and save hostnames you choose to pause. It manages a dedicated DeepSeek connection tab. It does not access Chrome's browsing-history database or build a list of visited pages.

The request does not separately add the reading page's URL or the full page as prompt fields. URLs, names, health information, financial information, private messages or other sensitive material can nevertheless be included if they occur in your selection or enabled context. The extension does not automatically redact sensitive content or classify it into separate profiles. Pause lookups before selecting content you do not want shared; turn context sharing off before highlighting if you want to send only the selection.

## DeepSeek login and network requests

The extension creates or reuses a DeepSeek website tab. Its packaged script running in that website's environment reads the existing userToken value, when available, from that origin's local storage and uses it in the Authorization header of HTTPS requests to that same DeepSeek origin. The browser may also attach that website's cookies to its same-origin requests. The extension does not ask you to enter a password or API key, request Chrome's cookies permission, or export account tokens or cookies to the developer or to the extension's calculation host.

The website-side script creates a chat session, obtains a fresh computation challenge and submits the completion request. Session IDs, challenge signatures and the signed proof header stay in the website-side request flow; they are not forwarded to the reading card or developer. Public client-version, platform, locale and time-zone-offset headers observed in the website's own traffic may be reused for its same-origin requests. Using existing credentials locally is still handling authentication information, even though the developer does not receive it.

## Version-specific computation

| Edition shown in Chrome | How challenge computation runs | Additional permission |
| --- | --- | --- |
| Explained | A worker in the DeepSeek page downloads and executes the official website WASM asset from DeepSeek's website or fe-static.deepseek.com. The asset request omits credentials. | None beyond storage and HTTP/HTTPS site access |
| Explained Yellow | Same website-side remote WASM flow as Explained; its appearance and independent settings differ. | None beyond storage and HTTP/HTTPS site access |
| extension-wasm-offline | A hidden extension offscreen document starts a static worker and loads only the pinned WASM bundled with the extension. The worker verifies the file's SHA-256. There is no remote module download, remote fallback or automatic module update. | offscreen |

For extension-wasm-offline, only the challenge algorithm, hash, salt, expiry and difficulty, plus internal task identifiers and the numeric answer, cross the extension's local computation messages. Chat text, account tokens, cookies, chat-session IDs and challenge signatures are not sent to the calculation host. A computation worker is terminated after completion, cancellation or timeout. This description does not represent the third-party module as MIT-licensed or as authorized for public redistribution; its provenance and unresolved licensing status are documented separately.

## Recipients and third-party processing

Selected content and generated prompts are sent directly to DeepSeek over HTTPS to provide Explain and News. DeepSeek receives ordinary network metadata such as the connection IP address and browser request headers. Its website may independently make its normal service and resource requests. In the original and Yellow editions, DeepSeek's static asset host also receives the module-download request without account credentials.

The developer operates no lookup backend and includes no analytics, advertising, tracking SDK or external font service. The extension does not send lookup text, account credentials or browsing records to a developer-operated server. The developer does not receive or review your lookups through the extension.

DeepSeek independently processes and may retain submitted prompts, answers and chats under its own policy, account settings and applicable terms. Its handling may include service improvement, model training or review where its terms and settings permit; Explained does not change those settings or promise that the website service provides zero retention or no training. Review [DeepSeek's privacy policy](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html), [its user agreement](https://cdn.deepseek.com/policies/zh-CN/deepseek-terms-of-use.html), and your account's data controls before use. Removing this extension does not delete material held by DeepSeek.

## Storage and retention

| Information | Where it is handled and retained |
| --- | --- |
| Enabled/consent state, language, layout, context preference and chosen paused hostnames | Chrome extension local storage until changed, cleared or the extension is removed. These settings are not synced by the extension. |
| Dedicated DeepSeek connection-tab ID | Chrome extension session storage; it is not carried across a browser restart. |
| Selection, nearby text, prompts, answers, sources and request state | Temporary memory in the relevant reading page, website bridge and task contexts, until cleared, replaced or those contexts close. Closing a card clears its selected text/context and current answer cache; no lookup-history database is written. |
| Existing website token and cookies | DeepSeek's own browser storage and website request context, governed by logout, website settings and browser-data controls. They are not copied into extension storage. |
| Local computation inputs and numeric result in extension-wasm-offline | Transient task memory, with no persistent solver history; the computation worker is terminated when its task finishes or is cancelled or times out. |
| Submitted prompts, answers and chats at DeepSeek | Retained according to DeepSeek's policy and account controls; no deletion period is guaranteed by Explained. |

## Permissions and their purposes

- **HTTP/HTTPS site access:** injects the reading card and detects supported selections on ordinary webpages; identifies the current hostname for pause controls; runs the bridge on chat.deepseek.com. Continuous highlight-to-explain across sites requires more than a one-time toolbar click. Chrome's site-access settings let you restrict the allowed sites. App-level pause does not revoke that browser permission.
- **storage:** stores local preferences, consent and chosen paused hostnames, and uses session storage for the temporary connection-tab ID. It does not store lookup history or website credentials.
- **offscreen, only in extension-wasm-offline:** hosts a packaged worker in a hidden local extension document so computation can be terminated on cancellation or timeout. It is not a hidden browsing or scraping page and has no remote-module fallback.

The extensions do not request the cookies, history, debugger, geolocation or nativeMessaging permissions. Not requesting a permission is not a claim that related data is never handled: existing website authentication and the active page origin are processed as described above.

## Limited Use and developer commitments

Explained's use of information received from Google/Chrome APIs will adhere to the Chrome Web Store User Data Policy, including its Limited Use requirements. The developer limits collection, use and transfer to the disclosed reading-assistance purpose and necessary operations. The extension transfers selected content to DeepSeek only to obtain the requested explanation or news result.

The developer does not sell user data, transfer it for personalized advertising or data-broker profiling, use it to determine creditworthiness or for lending, or use it for unrelated functionality. There is no developer-side human review of lookups. If you choose to contact support, share only the specific information needed for your request; do not publish tokens, cookies, private URLs or chats. These commitments describe the extension and developer's handling; they do not override DeepSeek's independent policies or establish that a store review has approved this integration.

## Your controls and contact

You can pause globally or for a hostname, turn context sharing off, close the card to cancel, restrict Chrome's site access, clear the extension's data or remove it. These actions do not delete your DeepSeek account or its existing chats. Use DeepSeek's own controls to manage its chat history and data settings, and browser controls to manage website cookies and storage.

The maintainer can be contacted through [Explained support](https://github.com/yiqin-CodeWizard/explained-site/issues). For a privacy concern, first request a private contact route without including sensitive details in a public issue. See the project's [security reporting instructions](https://github.com/yiqin-CodeWizard/explained-site/blob/main/SECURITY.md). Public issue submissions are processed by GitHub and visible to others; only provide content you intend to share.

## The public website

The static Explained website does not run lookups, use an account system, set analytics cookies or include advertising. Language, article and welcome choices can be carried in its URL. Its illustrative examples are labeled; opening one does not contact DeepSeek. The installed extension follows the data flows above when you enable it and highlight text.

GitHub Pages hosts the website, resources and intended downloads. GitHub receives ordinary web-request information, including IP addresses and browser headers, under [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Links to article sources, DeepSeek, GitHub or other external websites are handled under those services' policies when you open them. This policy is linked from the website and extension setup/settings; material changes will be disclosed in the product before a changed data use begins.
