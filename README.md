# Daxoppgave-AIART

## Det overordnede målet med denne oppgaven er at du skal demonstrere hvilken kompetanse du har tilegnet deg så langt i år. Vurderingen vil legge vekt på følgende kompetanse og hvor effektivt du klarer å utføre arbeidsoppgavene:

- Planlegging av prosjektet
- Dokumentasjon av resultat
- Evne til å produsere artefaktene i oppgaveteksten
- Evne til å rulle ut prosjektet

### Prosjektplan
Lag en plan for prosjektet ditt. Planen skal legges ved prosjektet som PDF og skal inneholde:

- Oversikt over hvilke teknologier du skal bruke
- Oversikt over hvilke arbeidsoppgaver du skal løse, med tidsangivelse

### Git-Branches
Lag tre branches for prosjektet ditt:

- "dev" som du jobber på og utvikler
- "test" som du pusher til et testmiljø
- "deployment" som du bruker for å rulle ut det ferdige produktet, eller hver "major release"

### Operasjon og utrulling
Oppgavene som ligger her vil i all hovedsak bli tatt med i vurderingen av driftskarakteren din.

### Bilder
Bildene du skal bruke er delt på et NFS share. Du skal under ingen omstendighet laste ned disse. Du skal kun mounte det delte området på serveren din. dev miljø.

Pass på at du kan teste koden din hyppig. Siden dette prosjektet kun går over en dag, er det nok at du har dev-miljøet på en lokal maskin som du jobber på, men har du behov for å flytte deg mellom maskiner, så pass på at du har muligheten til det.

### Testmiljø
Testmiljøet ditt skal ikke eksponeres for omverdenen. Det betyr at du bør kjøre det på en VM. Hver gang koden i testmiljøet holder høy nok kvalitet kan du pushe koden til utrullingsmiljøet.

### Utrullingsmiljø
Utrullingsmiljøet ditt er det som er eksponert mot omverdenen. Du kan bruke serveren og domenenavnet du har fått tildelt av skolen, som er anonymt, eller du kan bruke ditt eget miljø om du ønsker og har muligheten til det. Resultatet av oppgaven må uansett være tilgjengelig fra det offentlige internettet. Du velger selv om det skal være anonymt eller ikke.

### DNS
Både testmiljøet ditt og utrullingsmiljøet ditt skal svare på:

- www.[brukernavn].ikt-fag.no (Testmiljøets svar er når du er på Globalprotect VPN, Utrullingsmiljøets svar er når du ikke er på Globalprotect VPN)

- www.AIART.ikt-fag.no (AIART er et nettsted som viser kunst generert av AI. Se vedlagte wireframes. Du står fritt til å velge farger, men layout skal være akkurat som på bildene.)

### Landingssiden
- Hacker alias er ditt brukernavn!
- Rundell skal vise et bilde om gangen et lite øyeblikk, men bildene skal rulleres sånn at det ser ut som om de kommer fra høyre og inn til venstre
- AIart Gallery skal være en lenke som går til galleri-siden
- Rundellen skal være en lenke som går til galleri-siden

### Gallerisiden
- Gallerisiden skal ha layout som på bildet
- Siden skal være dynamisk generert basert på en bilde mappe i prosjektet ditt
- Hvis det ikke finnes bilder i mappen skal det stå "\O/AIMAKESNOART,MAKESOMEINSTEAD,ORLEAVETHATTOSUCKERBURGZ<3" på siden
- Når du trykker på et bilde skal det lastes inn i forgrunnen som et stort bilde
- Uansett om du valgte en ny side eller popup, så skal filnavnet vises som tekst under bildet og være tydelig mot bakgrunnen

### Gjestebok
- Implementér en budfunksjon der alle som er på siden kan legge inn et forslag til hva de synes et bilde er verdt
- Lag en enkel database eller bruk localstorage

### Prosjektrapport
Prosjektrapporten skal inneholde:

- Beskrivelse av løste oppgaver og hvilke utfordringer de ga
- Dine egne vurderinger av resultatet
- Lenke til GitHub-repository
- SSH-klone-lenke til repository

### Vedlegg
- IP-Plan
- Nettverksdiagram

### Iterasjoner og milepæler
Det er et poeng at du jobber iterativt med denne oppgaven, så løs oppgaven i henhold til iterasjonsmålene beskrevet under. Hver iterasjon skal føre til en ny versjon på testserveren og hver milepæl skal føre til en ny versjon på produksjonsserveren.

#### Iterasjon 1
- Prosjektetablering
- Alle branches etablert på GIT
- Grunnleggende prosjektstrukturer opprettet
- Prosjektplaner utferdiget
- Test-serveren er opp og går med en identifiserbar testside som sier hva som kommer på siden

#### Iterasjon 2
- Konseptuell utforming
- Layouter implementert på forsiden
- AI-generert bilde som er tematisk til ditt alias er implementert
- Rundell er implementert med animasjon og evt placeholder bilder
- Iterasjonen er pushet til testserveren
- AI Art Gallery lenkene er deaktivert/død

#### Iterasjon 3
- Milepæl: Publiserbar forside
- Legg inn bildene på nettstedet ditt sånn at rundellen viser riktige bilder
- Implementér farger og fonter sånn at siden ser ut ca sånn som du tenker at det skal se ut til slutt. Det er lov å endre dette senere.
- Denne versjonen av siden skal i produksjon/publiseres

#### Iterasjon 4
- Gallerisiden
- Lag layout til gallerisiden
- Implementér det du har av CSS
- Siden skal vise alle bildene fra bilde mappen din

#### Iterasjon 5
- Testing og utrulling
- Sørg for at prosjektet ditt er fullført. Test og se over.
- Rull ut løsningen på web-host'en

#### Iterasjon X
- Gjestebok
- I denne iterasjonen må du planlegge, teste og rulle ut feature: Gjestebok. Hvordan du løser det er opp til deg.

#### Iterasjon Å
- Siste iterasjon
- Fullfør prosjektrapport, lag en arkivfil og lever prosjektet på oppgavesiden.
- Vær klar til å presentere løsningen din på forelesning.

### Resurser
Bilder og vedlegg tilgjengeligher:
