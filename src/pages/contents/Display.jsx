import React from 'react'
import './cours-styling.css'
function Display() {
  return (
    <div className="content-container container">
      <h2 className="title">Display en CSS</h2>
      <p>
        La propriété display détermine comment un élément HTML se comporte dans
        la page, comment il occupe l'espace, et comment il interagit avec les
        autres éléments.
      </p>
      <h3 className="sub-title">🟣 display: block</h3>
      <p>✅ Caractéristiques</p>
      <ul>
        <li>Commence toujours sur une nouvelle ligne</li>
        <li>Occupe toute la largeur disponible (100%)</li>
        <li>width/height fonctionnent</li>
        <li>
          padding, border, margin fonctionnent parfaitement, y compris vertical
        </li>
      </ul>
      <p>✅ Exemples d'éléments block</p>
      <ul>
        <li>&lt;div&gt;</li>
        <li>&lt;h1&gt; à &lt;h6&gt;</li>
        <li>&lt;p&gt;</li>
        <li>&lt;section&gt;</li>
        <li>&lt;header&gt;</li>
      </ul>
      <p>✅ Quand l’utiliser ?</p>
      <ul>
        <li>Pour structurer la page</li>
        <li>Pour créer des sections, containers, cartes</li>
        <li>Pour faire des blocs qui prennent toute la largeur</li>
      </ul>
      <h3 className="sub-title">🟣 display: inline</h3>
      <p>✅ Caractéristiques</p>
      <ul>
        <li>Ne commence pas sur une nouvelle ligne</li>
        <li>Occupe seulement la largeur nécessaire</li>
        <li>width/height ne fonctionnent pas</li>
        <li>
          padding, border, margin fonctionnent horizontalement, mais pas
          verticalement
        </li>
      </ul>
      <p>✅ Exemples d'éléments inline</p>
      <ul>
        <li>&lt;span&gt;</li>
        <li>&lt;a&gt;</li>
        <li>&lt;strong&gt;</li>
        <li>&lt;em&gt;</li>
        <li>&lt;img&gt;</li>
      </ul>
      <p>✅ Quand l'utiliser ?</p>
      <ul>
        <li>Pour styliser des parties de texte</li>
        <li>Pour insérer des liens, images dans du texte</li>
        <li>Pour appliquer des styles sans affecter la structure</li>
      </ul>
      <h3 className="sub-title">🟣 display: inline-block</h3>
      <p>✅ Caractéristiques</p>
      <ul>
        <li>Ne commence pas sur une nouvelle ligne</li>
        <li>Occupe seulement la largeur nécessaire</li>
        <li>width/height fonctionnent</li>
        <li>
          padding, border, margin fonctionnent parfaitement, y compris vertical
        </li>
      </ul>
      <p>✅ Exemples d'éléments inline-block</p>
      <ul>
        <li>&lt;img&gt;</li>
        <li>&lt;button&gt;</li>
        <li>&lt;input&gt;</li>
      </ul>
      <p>✅ Quand l’utiliser ?</p>
      <ul>
        <li>Pour créer des boutons personnalisés</li>
        <li>Pour des badges, tags, petites cartes alignées</li>
        <li>Menu horizontal</li>
        <li>Pour contrôler taille + rester sur la même ligne</li>
      </ul>
      <h3 className="sub-title">🟣 Les Replaced Inline Elements</h3>
      <p>
        Ce sont des éléments inline, MAIS avec un comportement spécial : Leur
        contenu vient de l’extérieur du HTML.
      </p>
      <p>✅ Exemples</p>
      <ul>
        <li>&lt;img&gt; </li>
        <li>&lt;video&gt; </li>
        <li>&lt;textarea&gt; </li>
        <li>&lt;input&gt; </li>
      </ul>
      <p>✅ Caractéristiques</p>
      <p>Ils sont inline, mais :</p>
      <ul>
        <li>width/height fonctionnent</li>
        <li>padding, border, margin fonctionnent</li>
        <li>Ce sont déjà des boîtes complètes, même en inline</li>
        <li>Le navigateur contrôle souvent leur rendu</li>
      </ul>
      <p>✅ Quand l’utiliser ?</p>
      <ul>
        <li>Images</li>
        <li>Médias</li>
        <li>Formulaires</li>
      </ul>
      <p>
        Conseil: PAS BESOIN de mettre display: inline-block sur eux (car ils se
        comportent déjà comme des inline-block naturels).
      </p>
    </div>
  );
}

export default Display
