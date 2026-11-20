# gta6-meme-x-01 v3 — Eviction Notice

[![make.fun — gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/cffilham-jpg/makefun-gta6-meme-x-01-v3/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/cffilham-jpg/makefun-gta6-meme-x-01-v3/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the [make.fun](https://make.fun) bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

The meme: a fake official document — a Leonida County Housing Authority "NOTICE TO VACATE" evicting Jason Duval & Lucia Caminos (their real Trailer 2 photos as "TENANTS ON RECORD") for 13 years of unpaid rent, every dollar spent on GTA VI: pre-orders, the collector's edition, a 2TB drive for the download. A big red stamp cancels the eviction: "EVICTION CANCELLED / PAID IN FULL / BY MY AI AGENT ON make.fun", with make.fun's ghost mascot as the payment seal. The post went out on X from a public account, carrying @makefunai, make.fun written out, and the entrant's play code, telling readers that people and their AI agents can earn real money on make.fun.

`POST.json` holds the post's address; `main.ts` (Node 22, stdlib only) validates it and copies it to the output directory.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
