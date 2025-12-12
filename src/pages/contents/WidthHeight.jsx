import BoiteCodes from '../../components/UI/BoiteCodes';
import { codes } from '../../data/width-height';
import './cours-styling.css'

function WidthHeight() {
  return (
    <div className="content-container container">
      <h2 className="title">Width & Height</h2>
      <h3 className="sub-title">🟣 Width</h3>
      <p>Définir une largeur fixe.</p>
      <p>Fonctionne sur :</p>
      <ul>
        <li>block</li>
        <li>inline-block</li>
        <li>replaced inline elements (img, input, …)</li>
      </ul>
      <p>Ne fonctionne pas sur:</p>
      <p>
        ❌ éléments inline (ex : span, a), sauf si tu leur mets display:
        inline-block ou block.
      </p>
      <p>Exemple :</p>
      <BoiteCodes content={codes[0]} />
      <p>Comportements : </p>
      <ul>
        <li>reste toujours 300px</li>
        <li>même si l'écran est plus petit → déborde (overflow)</li>
      </ul>
      <h3 className="sub-title">🟣 Height</h3>
      <p>Définie une hauteur fixe.</p>
      <p>Même règle que width.</p>
      <p>Fonctionne sur :</p>
      <ul>
        <li>block</li>
        <li>inline-block</li>
        <li>replaced inline elements (text, input, textarea, …)</li>
      </ul>
      <p>Ne fonctionne pas sur:</p>
      <p>inline → ❌ height ignoré.</p>
      <p>Exemple : </p>
      <BoiteCodes content={codes[1]} />
      <h3 className="sub-title">🟣 MAX/MIN les limites flexibles</h3>
      <p>
        Ce sont les propriétés les plus importantes pour rendre un site
        responsive.
      </p>
      <p>🟢 max-width</p>
      <p>Le contenue ne peut pas dépasser cette largeur</p>
      <p>Exemples d'usages : </p>
      <ul>
        <li>images responsives</li>
        <li>conteneurs centré</li>
        <li>cartes / sections</li>
      </ul>
      <p>Exemple :</p>
      <BoiteCodes content={codes[2]} />
      <p>Comportements : </p>
      <ul>
        <li>l'élément peut devenir plus petit (si l'écran est petit)</li>
        <li>mais jamais plus large que 1200px</li>
      </ul>
      <p>très utiliser en web moderne</p>
      <p>🟢 min-width</p>
      <p>Empêche l'élément de devenir trop petit</p>
      <p>Exemples d'usages : </p>
      <ul>
        <li>cartes d'un grid</li>
        <li>sidebar qui ne doit pas s'écraser</li>
        <li>tags</li>
      </ul>
      <p>Exemple : </p>
      <BoiteCodes content={codes[3]} />
      <p>Comportement : </p>
      <p>en dessous de 250px → l'élément pousse à la ligne</p>
      <p>🟢 max-height</p>
      <p>Limite la hauteur maximum.</p>
      <p>Exemples : </p>
      <ul>
        <li>modal</li>
        <li>card avec scroll interne</li>
      </ul>
      <BoiteCodes content={codes[4]} />
      <p>Comportement : </p>
      <ul>
        <li>si le contenu dépasse → scroll</li>
        <li>ne dépasse jamais 400px</li>
      </ul>
      <p>🟢 min-height</p>
      <p>Empêche la hauteur de devenir trop petite.</p>
      <p>Exemples : </p>
      <ul>
        <li>sections pleine hauteur</li>
        <li>header</li>
        <li>div qui doit garder une taille minimum</li>
      </ul>
      <BoiteCodes content={codes[5]} />
      <p>Comportement : </p>
      <ul>
        <li>peut devenir plus grand</li>
        <li>jamais plus petit que 300px</li>
      </ul>
      <h3 className="sub-title">🟣 CONSEILS PRATIQUES (IMPORTANT)</h3>
      <p>🟢 Quand utiliser width / height ?</p>
      <ul>
        <li> pour des éléments fixes : sidebar, navbar</li>
        <li>attention → pas responsive</li>
        <li>utilise-les rarement sur mobile</li>
      </ul>
      <p>🟢 Quand utiliser max-width ?</p>
      <ul>
        <li>pour les layouts modernes</li>
        <li>conteneur centré : le plus courant</li>
        <li>images responsive : indispensable</li>
      </ul>
      <p>🟢 Quand utiliser min-width ?</p>
      <ul>
        <li>évite que le texte écrase ton design</li>
        <li>cool pour grid / flex items</li>
      </ul>
      <p>🟢 Quand utiliser max-height ?</p>
      <ul>
        <li>scroll interne dans un modal</li>
        <li>limiter un contenu trop long</li>
      </ul>
      <p>Quand utiliser min-height ?</p>
      <ul>
        <li>sections dans une landing page</li>
        <li>éléments qui doivent respirer</li>
        <li>éviter que le design devienne trop compact</li>
      </ul>
      <p>🔵 Exemple réel 1 : une image responsive (utilise max-width)</p>
      <p>
        Objectif : l'image se réduit sur petit écran, mais ne dépasse jamais sa
        taille réelle.
      </p>
      <p>C'est l'usage le plus courant de max-width.</p>
      <p>Code</p>
      <BoiteCodes
        content={codes[6]}
        language="html"
      />
      <BoiteCodes content={codes[7]} />
      <p>🧠 Explication </p>
      <ul>
        <li>
          max-width: 100% → l’image ne dépasse jamais la largeur du parent
        </li>
        <li>height: auto → garde les proportions</li>
      </ul>
      <p>➡️ Tous les sites modernes utilisent ça.</p>
      <p>
        🔵 Exemple réel 2 : une carte (card) qui ne devient jamais trop large
        (max-width)
      </p>
      <p>
        Comme une carte de produit, un post Instagram, une fiche d’information…
      </p>
      <p>Code</p>
      <BoiteCodes
        content={codes[8]}
        language="html"
      />
      <BoiteCodes content={codes[9]} />
      <p>
        Résultat : La carte prend toute la largeur sur mobile, mais ne dépasse
        jamais 400px sur les grands écrans.
      </p>
      <p>🔵 Exemple réel 3 : un bouton flexible (min-width)</p>
      <p>
        🎯 Objectif : le bouton garde minimum une largeur, mais peut s'agrandir.
      </p>
      <p>Code</p>
      <BoiteCodes
        content={codes[10]}
        language="html"
      />
      <BoiteCodes content={codes[11]} />
      <p>🧠 Résultat</p>
      <ul>
        <li>le bouton ne devient pas trop petit, </li>
        <li>mais le texte augmente → il peut s’adapter</li>
      </ul>
      <p>
        🔵 Exemple réel 4 : zone de texte (textarea) qui ne devient pas trop
        haute (max-height)
      </p>
      <p>
        💬 Dans un formulaire, tu veux que la zone grandisse avec le texte, mais
        pas qu’elle prenne tout l’écran.
      </p>
      <p>code</p>
      <BoiteCodes
        content={codes[12]}
        language="html"
      />
      <BoiteCodes content={codes[13]} />
      <p>🧠 Résultat</p>
      <ul>
        <li>peut grandir</li>
        <li>ne dépasse jamais 200px → Un scroll apparaît automatiquement.</li>
      </ul>
      <p>🔵 Exemple réel 5 : une image avatar carrée (min + max)</p>
      <p>👤 Pour garder un avatar carré harmonieux.</p>
      <BoiteCodes content={codes[14]} />
      <p>🧠 Résultat</p>
      <ul>
        <li>jamais plus grande que 80px.</li>
        <li>jamais plus petite que 40px</li>
        <li>toujours responsive</li>
      </ul>
    </div>
  );
}

export default WidthHeight
