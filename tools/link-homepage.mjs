import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const file=path.join(root,'index.html');
let html=fs.readFileSync(file,'utf8');
const slugs=['unfallinstandsetzung','fahrzeuglackierung','karosseriearbeiten','lackaufbereitung','kfz-inspektion','motorelektronik','achsvermessung','hu-au-service','klimaanlage-service','oelwechsel','bremsen-service','reifenservice','karosserietechnik','autoglas-reparatur','abhol-bringservice','hohlraumversiegelung','fahrzeugfolierung'];
let i=0;
html=html.replace(/(<article class="service-card[^>]*>[\s\S]*?<a href=")[^"]+("[^>]*>)(?:Anfrage stellen|Mehr erfahren)( →<\/a><\/article>)/g,(match,a,b,c)=>i<slugs.length?`${a}leistungen/${slugs[i++]}.html${b}Mehr erfahren${c}`:match);
if(i!==slugs.length) throw new Error(`Expected ${slugs.length} service links, updated ${i}`);
if(!html.includes('all-services-link')) html=html.replace('      </div>\n    </section>\n\n    <section class="workshop-showcase"','      </div>\n      <div class="all-services-link"><a class="btn primary" href="leistungen/index.html">Alle 55 Leistungen ansehen <b>↗</b></a></div>\n    </section>\n\n    <section class="workshop-showcase"');
fs.writeFileSync(file,html);
console.log(`Linked ${i} homepage cards to SEO pages.`);
