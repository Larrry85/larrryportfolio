# Projektien Yhteenvedot

Tämä dokumentti sisältää yhtenäiset yhteenvedot kaikista projekteista. Klikkaa projektin nimeä avataksesi yksityiskohdat.

---

## 🤖 Generative AI

<details>
<summary><strong>SmartWellness</strong> - AI-pohjainen full-stack terveyssovellus</summary>

### Projektin kuvaus

AI-pohjainen terveyssovellus, joka tarjoaa henkilökohtaisia terveysanalyysiä, ennusteita ja suosituksia. Sisältää käyttäjäprofiilit, päivittäisen seurannan, wellness-scoren, AI-insightsit ja riskianalyysin. 3-osainen projekti: terveysprofiilit & AI-analyysit (1/3), ravitsemussuunnittelu (2/3), AI-assistentti (3/3).

### Teknologiat & kielet

**Frontend:**
- React 18, Tailwind CSS, React Router, React Hook Form, Recharts, Socket.io

**Backend:**
- Node.js, Express.js, PostgreSQL, Sequelize ORM

**Autentikointi:**
- JWT, Passport.js (OAuth Google/GitHub), 2FA (TOTP)

**AI:**
- Groq API (Llama-3.1), AI-prompting, response validation

**Turvallisuus:**
- Helmet.js, Rate Limiting, bcrypt, GDPR-yhteensopivuus

**DevOps:**
- Docker, Docker Compose, SSL/TLS, WSL2/Windows/Linux -tuki

**Työkalut:**
- Git, npm, ESLint, Postman, DBeaver

### Keskeiset oppimisalueet

- Full-stack kehitys (MERN-tyyppinen stack)
- AI-integraatiot ja prompt-engineering
- Tietoturva (2FA, JWT, OAuth, data anonymisointi)
- Reaaliaikaiset ominaisuudet (WebSocket/Socket.io)
- Tietokantasuunnittelu ja ORM (Sequelize)
- Docker-kontainerointi ja monialustatuki
- API-suunnittelu ja validointi
- Frontend-visualisointi (chartit, dashboardit)

### CV-tiivistelmä

**SmartWellness** | React, Node.js, PostgreSQL, AI (Groq), Docker | Full-stack terveyssovellus AI-analyysilla, 2FA-autentikointi, reaaliaikaiset päivitykset, monialustatuki (Windows/WSL2/Linux)

</details>

---

## 🌐 Full Stack -projektit

<details>
<summary><strong>Sisuloki (SISU)</strong> - Tietoturvallinen lokianalytiikkapalvelu (SaaS)</summary>

### Projektin kuvaus

Web-pohjainen SaaS-palvelu, joka analysoi palvelinlokeja tekoälyn avulla. Projekti yhdistää web-kehityksen, tietoturvan ja data-analyysin.

**GitHub:** https://github.com/Larrry85/sisu

### Teknologiat

- **Kielet:** React, Node.js, Express, PostgreSQL, Python, Flask
- **DevOps:** Docker
- **Tietoturva:** JWT
- **Data-analyysi:** pandas, scikit-learn
- **Frontend:** TailwindCSS
- **API:** REST API

### Osaamisalueet (priorisoitu)

1. Full Stack -kehitys (React + Node.js + PostgreSQL)
2. Tietoturva (JWT, GDPR, tietoturvallinen koodaus)
3. DevOps (Docker, containerisointi)
4. Data-analyysi (Python, pandas, poikkeavuuksien tunnistus)

### CV-tiivistelmä

**Sisuloki** - Full Stack Developer | React, Node.js, PostgreSQL, Python, Docker | SaaS-kehitys, REST API, tietoturva, data-analyysi

</details>

<details>
<summary><strong>Match Me TaskBuddy</strong> - Full-stack verkkosovellus</summary>

### Projektin kuvaus

Full-stack verkkosovellus opiskelijoiden yhdistämiseen yhteisten kiinnostusten ja taitojen perusteella. Sisältää reaaliaikaisen chatin, suosittelualgoritmin ja sosiaalisen verkoston.

### Teknologiat & kielet

**Backend:**
- Go (Golang) - Backend-ohjelmointi
- GraphQL - API-arkkitehtuuri
- PostgreSQL - Relaatiotietokanta
- JWT - Autentikointi ja autorisointi
- WebSockets - Reaaliaikainen viestintä
- SQLX - Tietokantakyselyt

**Frontend:**
- React - Käyttöliittymäkirjasto
- TypeScript - Tyypitetty JavaScript
- Vite - Build-työkalu
- Tailwind CSS - CSS-framework
- Apollo Client - GraphQL-client
- React Router - Reititys
- Socket.io - Reaaliaikainen kommunikaatio

**Työkalut:**
- Git, npm, Go modules

### Projektin ominaisuudet

- Käyttäjähallinta (rekisteröinti, kirjautuminen, profiilit)
- Suosittelujärjestelmä painotetulla algoritmilla
- Reaaliaikainen chat
- Ystäväpyyntöjen hallinta
- Online-status seuranta
- Tietokantasuunnittelu ja optimointi

### Opetut taidot

- Full-stack kehitys (Go + React)
- GraphQL API:n suunnittelu ja toteutus
- Reaaliaikainen kommunikaatio (WebSockets)
- Autentikointi ja autorisointi (JWT)
- Tietokantasuunnittelu ja optimointi (PostgreSQL)
- Suosittelualgoritmien kehitys
- TypeScript-tyypitetty frontend-kehitys
- Moderni React-kehitys (hooks, routing)

### CV-tiivistelmä

**Match Me TaskBuddy** - Full-stack verkkosovellus (Go, React, TypeScript, GraphQL, PostgreSQL, WebSockets). Reaaliaikainen chat, suosittelujärjestelmä, käyttäjähallinta.

</details>

---

## 🔐 Kyberturva -projektit

<details>
<summary><strong>Binary Fusion</strong> - ELF-binäärien analyysi ja yhdistäminen</summary>

### Projektin kuvaus

Työkalu, joka yhdistää kaksi ELF-suoritettavaa tiedostoa yhdeksi binääriksi. Projekti toteuttaa kaksi eri lähestymistapaa binäärien yhdistämiseen: binääri-embedding ja todellinen osioiden yhdistäminen.

### Teknologiat & työkalut

**Ohjelmointikielet:**
- C++17 - Pääohjelmointikieli (ELF-parsinta, binäärimanipulaatio)
- C - Järjestelmäkutsut, fork/exec, muistinhallinta
- Bash/Shell - Automaatiot, testausskriptit

**Build & Development:**
- Makefile - Build-järjestelmä, riippuvuuksien hallinta
- GCC Toolchain - gcc, g++, ld (linker), objcopy, strip
- Linux - ELF-tuki, järjestelmäohjelmointi

**Binäärianalyysi & Manipulaatio:**
- ELF-format - Header-parsinta, osioiden käsittely
- readelf, objdump - Binäärianalyysi
- objcopy - Symbolien uudelleennimeäminen, binäärien muuntaminen

**Järjestelmäohjelmointi:**
- fork/exec - Prosessien hallinta
- mmap - Muistinmappaus
- Static linking - Staattinen linkitys

### Opetut taidot

**Tekniset taidot:**
- ELF-binäärien parsinta ja validointi
- Binäärimanipulaatio ja osioiden yhdistäminen
- Linker-työkalun käyttö symbolien resoluutioon
- Järjestelmäohjelmointi (fork, exec, waitpid)
- C++ STL (vektorit, mapit, algoritmit)
- Build-automaatio Makefilella
- Testausautomaatio Bash-skripteillä

**Käsitteet:**
- ELF-format (ET_EXEC, ET_REL, ET_DYN)
- Staattinen vs. dynaaminen linkitys
- Symbolien resoluutio ja uudelleennimeäminen
- Binääri-embedding vs. todellinen yhdistäminen
- Prosessien hallinta ja fork/exec-mallit

### Projektin ominaisuudet

- Kaksi eri toteutustapaa (embedding & concatenation)
- Automaattinen validointi ja virheenkäsittely
- Kattava testausautomaatio
- Dokumentaatio prosesseista

### CV-tiivistelmä

**Binary Fusion:** C++17/C - ELF-binäärien parsinta ja yhdistäminen, GCC toolchain (ld, objcopy), järjestelmäohjelmointi (fork/exec), Makefile-build, Bash-automaatio

</details>

<details>
<summary><strong>Encrypt-O-Matic</strong> - Python-pohjainen tiedostosalaustyökalu</summary>

### Projektin kuvaus

Python-pohjainen kryptografiasovellus, joka demonstroi AES-256, ChaCha20 ja Blowfish salausalgoritmien käyttöä, PBKDF2-avainjohdatuksen toteutusta, turvallista salasanan käsittelyä ja cross-platform -kehitystä. Projekti sisältää CLI-käyttöliittymän, taustaprosessien hallinnan, tiedostojen manipulaation ja kattavan dokumentaation.

### Teknologiat & kielet

- **Python 3.7+**
- **Cryptography** - Salauskirjasto
- **Cross-platform** (Windows/Linux)

### Kryptografiat & turvallisuus

- **Salausalgoritmit:** AES-256-CBC, ChaCha20, Blowfish
- **Avainjohdatus:** PBKDF2 (SHA-256, 100,000 iteraatiota)
- **Turvallisuuskäytännöt:** Salt-generointi, salasanan hashaus, IV/nonce-hallinta
- **Integriteetti:** MD5, SHA1, SHA256, CRC32 checksum-verifiointi

### Python-osaaminen

- **Standard Library:** argparse, getpass, threading, hashlib, json, base64, os, datetime
- **Type hints** & **Docstrings**
- **Virheenkäsittely** & **Input-validaatio**
- **OOP:** Luokkien suunnittelu ja toteutus
- **Threading:** Taustaprosessit (daemon-threadit)

### Kehitysympäristö & työkalut

- Virtual environments (venv)
- Riippuvuuksien hallinta (requirements.txt)
- Testaus & Validointi
- CLI-sovellus (command-line interface)
- JSON-konfiguraatio

### Projektinhallinta

- Cross-platform -yhteensopivuus
- Modulaarinen rakenne (utils.py, test_setup.py)
- Dokumentaatio (README.md)
- Koodin organisointi & Best practices

### Tärkeimmät opetukset

- Kryptografisten algoritmien käyttö ja toteutus
- Turvallinen salasanan käsittely ja avainjohdatus
- Tiedostojen käsittely ja manipulaatio
- Taustaprosessien hallinta (threading)
- CLI-sovellusten kehitys
- Cross-platform -kehitys

### CV-tiivistelmä

**Encrypt-O-Matic:** Python CLI -salaussovellus (AES-256, ChaCha20, PBKDF2), turvallinen salasanankäsittely, threading ja cross-platform -tuki.

</details>

<details>
<summary><strong>Shifty Shell</strong> - Polymorphic SSH Reverse Shell</summary>

### Projektin kuvaus

Polymorphic reverse shell -toteutus, joka yhdistää kryptografian, verkko-ohjelmoinnin ja koodianalyysin. Projekti demonstroi turvallisen kommunikaation toteutusta ja polymorphic code -konsepteja.

### Tekniikat & kielet

**Ohjelmointikielet:**
- Python 3.8+ (OOP, async, threading, socket programming)

**Kryptografia & Tietoturva:**
- AES-256 (GCM, CBC), Diffie-Hellman key exchange, PBKDF2, HKDF
- Polymorphic encryption, dynamic key generation
- Secure key exchange protocols

**Verkkotekniikat:**
- TCP/IP socket programming, reverse shell implementation
- Client-server architecture, C&C server design
- Network traffic analysis (Wireshark, scapy)

**Koodianalyysi:**
- Static analysis (AST parsing, code inspection)
- Dynamic analysis (runtime monitoring, process tracking)
- Pattern detection, obfuscation analysis

**Koodimuokkaus & Polymorphism:**
- AST manipulation (astor), bytecode manipulation
- Runtime code generation, self-modifying code
- Function variant generation, code mutation

**Kirjastot & Työkalut:**
- cryptography, pycryptodome, scapy, psutil, astor
- setuptools, pytest, paramiko
- Wireshark, VirtualBox, Git

**Arkkitehtuurit & Konseptit:**
- Modular design, protocol implementation
- Secure communication protocols
- Evasion techniques, polymorphic malware concepts

### Opetut taidot

- **Kryptografian soveltaminen:** Modern encryption algorithms, secure key management
- **Verkko-ohjelmointi:** TCP/IP, socket programming, reverse connections
- **Koodianalyysi:** Static/dynamic analysis, security pattern detection
- **Polymorphic code:** Runtime code modification, self-modifying systems
- **Tietoturva:** Evasion techniques, secure communication design
- **Projektinhallinta:** Modular architecture, testing, documentation

### CV-tiivistelmä

**Shifty Shell:** Python 3.8+ (OOP, threading, socket programming) | Kryptografia: AES-256 (GCM/CBC), Diffie-Hellman, PBKDF2, HKDF | Verkkotekniikat: TCP/IP, reverse shell, C&C server | Koodianalyysi: Static (AST parsing) & Dynamic (runtime monitoring) | Polymorphic code: AST/bytecode manipulation, self-modifying code

</details>

<details>
<summary><strong>Penetraatiotesti Metasploitable 2</strong> - Kattava haavoittuvuusanalyysi</summary>

### Projektin kuvaus

Kattava penetraatiotesti haavoittuvassa Linux-ympäristössä. Kehitin Python-pohjaiset automaatiotyökalut penetraatiotestaukseen ja suoritin kattavan haavoittuvuusanalyysin. Tunnistin 23 avointa porttia, onnistuin saavuttamaan root-pääsyn useilla hyökkäysvektoreilla (brute force, SQL-injektio, tiedoston lataus) ja dokumentoin löydökset ammattimaisessa raportissa.

### Teknologiat & työkalut

**Ohjelmointikielet:**
- Python 3 (automaatio, HTTP-requestit, tiedostojen käsittely)
- C (exploit-kehitys, kernel-tason ohjelmointi)
- Bash (skriptaus, komentorivin työkalut)

**Tietoturvatyökalut:**
- Nmap (verkkoskannaus, palveluiden tunnistus)
- Hydra (brute force -hyökkäykset)
- SQLmap (SQL-injektioiden testaus)
- Nikto (web-palvelimen haavoittuvuusskannaus)
- Dirb (hakemistojen enumerointi)
- Netcat (reverse shell, verkkoyhteydet)
- cURL (HTTP-testaus, webshell-kommunikaatio)

**Verkko- ja järjestelmätyökalut:**
- Linux (Ubuntu, komentorivi, järjestelmähallinta)
- VirtualBox/VMware (virtuaalikoneiden hallinta)
- Telnet (etäyhteydet)
- Apache (web-palvelin)
- MySQL (tietokanta)

### Osaamisalueet

**Penetraatiotestaus:**
- Verkkorekognitio ja skannaus
- Brute force -hyökkäykset (automatisoitu)
- SQL-injektiot (UNION-pohjaiset hyökkäykset)
- Tiedoston lataus -haavoittuvuudet
- Reverse shell -toteutukset
- Privilege escalation
- Root access -hankinta

**Web-sovellusturvallisuus:**
- DVWA (Damn Vulnerable Web Application) -testaus
- Autentikointi- ja autorisointiongelmat
- Haavoittuvuuksien tunnistus ja hyökkäysketjut
- OWASP-standardiin perustuva metodologia

**Automaatio ja skriptaus:**
- Python-pohjaiset penetraatiotestityökalut
- HTTP-sessioiden hallinta
- Tiedostojen käsittely ja raportointi
- Automaattinen haavoittuvuuksien testaus

**Raportointi ja dokumentointi:**
- Ammattimaiset penetraatiotestiraportit
- Todisteiden kerääminen ja dokumentointi
- Haavoittuvuuksien riskiarviointi
- Suositukset haavoittuvuuksien korjaamiseksi

### Projektin tulokset

- Suoritin kattavan penetraatiotestin haavoittuvassa Linux-ympäristössä
- Kehitin Python-pohjaiset automaatiotyökalut brute force-, SQL-injektio- ja tiedoston lataus -hyökkäyksiin
- Tunnistin 23 avointa porttia ja useita kriittisiä haavoittuvuuksia
- Onnistuin saavuttamaan root-pääsyn useilla hyökkäysvektoreilla
- Loin ammattimaisen penetraatiotestiraportin OWASP-standardiin perustuen
- Vertasin oman työkaluni tehokkuutta alan standardityökaluihin (Hydra, SQLmap)

### CV-tiivistelmä

**Penetraatiotesti Metasploitable 2 -järjestelmälle** | Python, C, Linux, Nmap, SQLmap, Hydra | Kattava penetraatiotesti haavoittuvassa Linux-ympäristössä: porttiskannaus, SQL-injektiot, brute force, privilege escalation ja OWASP-pohjainen raportointi.

</details>

<details>
<summary><strong>Port Prowler</strong> - Multi-threaded porttiskanneri</summary>

### Projektin kuvaus

Python-pohjainen porttiskanneri, joka tukee TCP/UDP/SYN -skannausmenetelmiä. Projekti demonstroi verkko-ohjelmointia, multi-threadingia ja kyberturvallisuustestausta.

### Teknologiat & kielet

- **Python** (socket, concurrent.futures, argparse, Scapy)

### Opetut taidot

**Verkko-ohjelmointi:**
- TCP/UDP porttiskannaus (connect scan, stealth/SYN scan)
- Raw-pakettien käsittely (Scapy)
- Verkkoprotokollat (TCP, UDP, ICMP)
- Socket-ohjelmointi

**Ohjelmointitekniikat:**
- Multi-threading (ThreadPoolExecutor, 50 säiettä rinnakkain)
- Komentorivikäyttöliittymä (argparse)
- Rinnakkaisuus ja suorituskykyoptimointi
- Virheenkäsittely ja timeout-hallinta

**Kyberturvallisuus:**
- Porttiskannausmenetelmät (TCP connect, UDP, SYN stealth)
- Verkkoturvallisuustestaus
- Palvelutunnistus porttinumeron perusteella
- Tulosten validointi (Nmap-vertailu)

**Projektinhallinta:**
- Modulaarinen koodirakenne (utils, scanner, main)
- Dokumentointi (README, workflow-kaaviot)
- Testausympäristö (VirtualBox, Metasploitable2)

### CV-tiivistelmä

**Port Prowler:** Python | Verkko-ohjelmointi | Multi-threaded porttiskanneri (TCP/UDP/SYN) | Scapy | Kyberturvallisuustestaus

</details>

<details>
<summary><strong>InvisiBits</strong> - Web-pohjainen steganografiatyökalu</summary>

### Projektin kuvaus

Web-pohjainen steganografiatyökalu, joka piilottaa ja purkaa viestejä kuvien sisään LSB-tekniikalla. Projekti yhdistää web-kehityksen, kryptografian ja tietoturvan.

### Teknologiat & kielet

**Backend:**
- Python 3
- Flask (web-framework, REST API)
- Pillow (PIL) (kuvankäsittely)
- Cryptography (salauskirjasto)

**Frontend:**
- HTML5
- CSS3
- JavaScript (ES6+) (DOM-manipulaatio, AJAX, asynkroninen ohjelmointi)
- CryptoJS (AES-salaus selaimessa)
- DOMPurify (XSS-suojaus)

### Tekniikat & taidot

- **Steganografia** (LSB - Least Significant Bit)
- **Kryptografia** (AES-symmetrinen salaus)
- **REST API** -suunnittelu ja -toteutus
- **Client-side encryption** (salaus selaimessa, salasana ei mene palvelimelle)
- **Tiedostojen käsittely** (upload, validointi, tallennus)
- **Kuvan käsittely** (pikselitason manipulaatio, RGB/RGBA-muodot)
- **Turvallisuus** (XSS-suojaus, input-validointi, tiedostokoon rajoitukset)
- **UTF-8** -koodaus (Unicode-tuki, emojit, erikoismerkit)
- **Binäärioperaatiot** (bitwise operations, bittimanipulaatio)

### Arkkitehtuuri & suunnittelu

- MVC-arkkitehtuuri (Model-View-Controller)
- Modulaarinen koodirakenne (utils/, static/, templates/)
- Error handling (try-catch, validointi, virheviestit)
- Responsive web design

### Projektin tärkeimmät osa-alueet

**Backend-kehitys:**
- Flask REST API (encode/decode/check -endpointit)
- Kuvankäsittely PIL/Pillow -kirjastolla
- Tiedostojen validointi ja käsittely
- Error handling ja virheviestit

**Frontend-kehitys:**
- JavaScript DOM-manipulaatio
- AJAX/Fetch API -kommunikaatio
- Client-side AES-salaus (CryptoJS)
- XSS-suojaus (DOMPurify)
- Responsive UI

**Kryptografia & Steganografia:**
- LSB (Least Significant Bit) -tekniikka
- AES-symmetrinen salaus
- UTF-8 -koodaus ja Unicode-tuki
- Binäärioperaatiot ja bittimanipulaatio

**Turvallisuus:**
- Client-side encryption (salasana ei mene palvelimelle)
- Input-sanitointi
- Tiedostokoon ja -tyypin validointi
- XSS-hyökkäysten estäminen

### Opetettavat asiat

- Steganografian perusteet ja LSB-tekniikka
- Client-side vs server-side -salaus
- Web-sovellusten turvallisuus (XSS, input-sanitointi)
- RESTful API:n suunnittelu
- Kuvankäsittely Pythonilla
- Binäärioperaatiot ja bittimanipulaatio
- UTF-8 -koodaus ja Unicode-tuki

### CV-tiivistelmä

**InvisiBits** - Web-pohjainen steganografiatyökalu (Python/Flask, JavaScript) LSB-tekniikalla viestien piilottamiseen kuvien sisään. Client-side AES-salaus, XSS-suojaus, REST API.

</details>

<details>
<summary><strong>Digital Detective</strong> - OSINT-työkalu</summary>

### Projektin kuvaus

OSINT (Open Source Intelligence) -työkalu, joka kerää julkista tietoa henkilönimistä, IP-osoitteista ja käyttäjänimistä useista API:sta ja julkisista lähteistä. Sisältää web scrapingin, API-integraatiot, cachingin, datan validointia ja modulaarisen arkkitehtuurin.

### Teknologiat ja kielet

**Ohjelmointikielet:**
- Python 3 (CLI-sovellus, modulaarinen arkkitehtuuri)

**Kirjastot ja Frameworkit:**
- BeautifulSoup4 - Web scraping ja HTML-parsinta
- Requests - HTTP-pyynnöt API:hin
- Rich - Terminaali-UI ja taulukkomuotoinen tulostus
- python-dotenv - Ympäristömuuttujien hallinta (API-avaimet)
- argparse - Komentoriviparametrien käsittely
- pandas - Tiedon käsittely
- requests-futures - Asynkroniset HTTP-pyynnöt

**API:t ja Palvelut:**
- SerpAPI - Googlen hakutulosten API
- IP-API - IP-osoitteiden geolokaatio
- IP-Location API - IP-osoitteiden tiedot
- Sherlock - Käyttäjänimien haku sosiaalisen median alustoilla
- Social Analyzer - Sosiaalisen median analyysi

### Tekniset taidot

- **Web Scraping** - HTML-parsinta ja tiedon poiminta
- **API-integraatiot** - Useiden API:en yhdistäminen
- **Caching** - API-vastausten välimuistitus
- **Rate Limiting** - API-rajojen hallinta
- **Data Validation** - Tietojen ristiinvertailu ja validointi
- **Error Handling** - Virheenkäsittely ja poikkeustilanteet
- **File I/O** - Tulosten tallennus tiedostoihin
- **Regex** - Säännölliset lausekkeet (puhelinnumeroiden validointi)
- **Subprocess** - Ulkoisten työkalujen käyttö
- **JSON** - JSON-datan käsittely
- **CLI Development** - Komentorivityökalun kehitys
- **Unit Testing** - Testien kirjoittaminen ja suorittaminen

### Projektinhallinta

- Git - Versiohallinta
- Virtual Environment - Python-ympäristön hallinta
- Requirements Management - Riippuvuuksien hallinta

### Opetut konseptit

- OSINT-menetelmät
- Tietoturva (API-avainten suojaus)
- Eettinen web scraping
- Modulaarinen ohjelmointi
- Koodin organisointi ja dokumentointi

### CV-tiivistelmä

**Digital Detective:** OSINT-työkalu Pythonilla, joka kerää julkista tietoa henkilönimistä, IP-osoitteista ja käyttäjänimistä useista API:sta. Sisältää web scrapingin, API-integraatiot, cachingin, datan validointia ja modulaarisen arkkitehtuurin.

</details>

---

## 🎮 Web Development -projektit

<details>
<summary><strong>Web Game</strong> - Reaaliaikainen moninpeliverkkopeli</summary>

### Projektin kuvaus

Reaaliaikainen moninpeliverkkopeli, joka demonstroi WebSocket-kommunikaatiota ja modernia frontend-arkkitehtuuria.

### Teknologiat

**Frontend:**
- React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite

**Backend:**
- Node.js, Express.js, WebSocket

**Työkalut:**
- ESLint, PostCSS, npm, Git

### Opetut taidot

- Reaaliaikainen moninpelikommunikaatio WebSocketilla
- React-komponenttien kehitys
- Node.js/Express backend
- Moderni frontend-arkkitehtuuri
- Client-server-arkkitehtuuri

### CV-tiivistelmä

**Web Game** - Reaaliaikainen moninpeliverkkopeli – React, Node.js, Express, WebSocket, JavaScript (ES6+), Tailwind CSS, Vite | Reaaliaikainen moninpelikommunikaatio, React-komponentit, backend-kehitys, moderni frontend-arkkitehtuuri

</details>

<details>
<summary><strong>Race Track Info Screens</strong> - Reaaliaikainen kilparatajärjestelmä</summary>

### Projektin kuvaus

Reaaliaikainen kilparatajärjestelmä, jossa useat käyttöliittymät kommunikoivat keskenään WebSocket-yhteydellä. Järjestelmä hallinnoi kilpailusessioita, kuljettajia, kierrosaikoja ja näyttää reaaliaikaisia tuloksia.

### Teknologiat & kielet

- **Backend:** Node.js, Express.js
- **Real-time:** Socket.IO
- **Frontend:** JavaScript (vanilla), HTML, CSS
- **Työkalut:** ngrok (tunneling), Git

### Oppimiset & taidot

**Backend-kehitys:**
- Express.js-palvelimen rakentaminen ja reititys
- Socket.IO:n käyttö reaaliaikaiseen kommunikaatioon
- Tapahtumapohjainen arkkitehtuuri (event-driven)
- Palvelimen tilan hallinta (in-memory storage)
- Autentikointijärjestelmän toteutus

**Frontend-kehitys:**
- Vanilla JavaScript -sovelluskehitys
- Reaaliaikainen UI-päivitys Socket.IO:n avulla
- Responsiivinen suunnittelu (mobiili, tabletti, näyttö)
- SVG-animaatiot (countdown timer)
- Modulaarinen koodirakenne

**Järjestelmäarkkitehtuuri:**
- Client-server -arkkitehtuuri
- Usean käyttöliittymän koordinaatio
- Reaaliaikainen datan synkronointi useiden asiakkaiden välillä
- Tunneling-ratkaisut (ngrok) testausympäristössä

**Projektinhallinta:**
- Tiimityöskentely
- Dokumentointi
- Käyttöliittymäsuunnittelu eri käyttäjärooleille

### CV-tiivistelmä

**Race Track Info Screens** - Reaaliaikainen kilparatajärjestelmä Node.js/Express.js/Socket.IO -teknologioilla, jossa useat käyttöliittymät kommunikoivat WebSocket-yhteydellä kilpailusessioiden, kuljettajien ja kierrosaikojen hallintaan.

</details>

---

## 🐹 Go -projektit

<details>
<summary><strong>Art Interface</strong> - ASCII-art työkalu</summary>

### Projektin kuvaus

Go-pohjainen työkalu ASCII-artin käsittelyyn, joka toimii sekä CLI- että web-käyttöliittymällä. Projekti demonstroi Go HTTP-palvelimen käyttöä, templatointia ja algoritmien toteutusta.

### Teknologiat & kielet

- **Go (Golang)**
- **HTML, CSS**
- **HTTP/REST**

### Opetut tekniikat & taidot

**Backend:**
- Go HTTP-palvelin (`net/http`)
- RESTful API (GET/POST, statuskoodit 200/202/400/405/500)
- HTML-templatointi (`html/template`)
- Staattisten tiedostojen palvelu
- Reititys ja käsittelijät
- POST-lomakkeiden käsittely (`FormValue`)

**Algoritmit & Tietorakenteet:**
- Run-length encoding/dekoodaus ASCII-artille
- Säännölliset lausekkeet (`regexp`)
- Merkkijonojen käsittely ja pattern matching
- Toistuvien patternien etsintä

**CLI & I/O:**
- Komentoriviparametrit (`os.Args`)
- Tiedostojen lukeminen (`os.Open`, `bufio.Scanner`)
- Monirivinen syöte
- Käyttäjän interaktio

**Web Development:**
- HTML5 semanttiset elementit
- CSS-tyylitys
- Responsiivinen design
- Cross-platform selainavaus (`exec.Command`, `runtime.GOOS`)

**Ohjelmointikäytännöt:**
- Modulaarinen rakenne (paketit)
- Virheenkäsittely (`error`)
- Koodin organisointi
- Dokumentointi (README)

### CV-tiivistelmä

**Art Interface:** Go, HTML, CSS | HTTP-palvelin, RESTful API, templatointi, run-length encoding, regexp, CLI, virheenkäsittely

</details>

<details>
<summary><strong>Cars Viewer</strong> - Autogalleria</summary>

### Projektin kuvaus

Full-stack web-sovellus autojen esittelyyn, joka yhdistää Go backendin, Node.js API:n ja frontendin. Projekti demonstroi monipuolista arkkitehtuuria ja rinnakkaista prosessointia.

### Teknologiat ja kielet

**Backend:**
- Go (Golang) - HTTP-palvelin, reititys, template-renderöinti
- Node.js / Express.js - REST API, JSON-datan käsittely

**Frontend:**
- HTML5 - Go template -mallinnus
- CSS3 - responsiivinen tyylittely

### Tekniikat ja konseptit

- **Full-stack kehitys** - Go backend + Node.js API + frontend
- **RESTful API** - JSON-pohjainen API Express.js:llä
- **Server-side rendering** - Go template -moottori
- **Concurrent programming** - Goroutines rinnakkaiseen prosessointiin
- **HTTP routing** - REST-endpointit ja staattisten tiedostojen palvelu
- **CORS-käsittely** - Cross-origin -tuki
- **JSON-datan käsittely** - Parsinta ja serialisointi
- **File I/O** - Tiedostojen lukeminen ja palvelu

### Projektin rakenne

- Monipuolinen arkkitehtuuri: Go-palvelin käynnistää Node.js-API:n goroutinena
- Modulaarinen koodirakenne Go-paketeissa
- Staattisten resurssien hallinta (kuvat, CSS, HTML)

### CV-tiivistelmä

**Cars Viewer:** Full-stack web-sovellus (Go, Node.js, Express, HTML, CSS) autojen esittelyyn. Yhdistää Go backendin, Node.js API:n ja server-side renderingin.

</details>

<details>
<summary><strong>Literary Lions Forum</strong> - Web-foorumi</summary>

### Projektin kuvaus

Web-foorumi käyttäjähallinnalla, postauksilla, kommenteilla, tykkäyksillä ja suodattimilla. Projekti demonstroi Go-pohjaista backend-kehitystä, tietokantasuunnittelua ja autentikointia.

### Teknologiat

- **Kielet:** Go (Golang)
- **Tietokanta:** SQLite
- **Frontend:** HTML, CSS
- **DevOps:** Docker
- **Muut:** SMTP (sähköposti), bcrypt (salasanojen hashaus), UUID (sessionhallinta)

### Opetut taidot

- Backend-kehitys Go:lla (HTTP-palvelin, RESTful API)
- Tietokantasuunnittelu ja SQL-kyselyt
- Autentikointi ja autorisointi (sessionhallinta, evästeet)
- Salasanojen hashaus ja resetointi
- Sähköpostivahvistus ja -lähetys
- Middleware-arkkitehtuuri
- CRUD-operaatiot
- Docker-kontainerointi
- Server-side rendering (HTML-templatit)

### CV-tiivistelmä

**Literary Lions Forum:** Web-foorumi Go:lla (SQLite, Docker, SMTP, bcrypt) käyttäjähallinnalla, postauksilla, kommenteilla, tykkäyksillä ja suodattimilla.

</details>

---

*Dokumentti luotu AI:n avulla.*

