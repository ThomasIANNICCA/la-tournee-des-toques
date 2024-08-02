import './MentionsLegales.scss';

const MentionsLegales = () => {
  return (
    <div className="legal-informations">
      <h1 className="secondary-title legal-informations-title">
        Mentions légales
      </h1>
      <div className="legal-informations-content pdg-lr">
        <div className="editor-infos">
          <p>
            Conformément aux dispositions des articles 6 et 19 de la loi pour la
            Confiance dans l'Économie Numérique, nous vous informons que :
          </p>
          <h3 className="secondary-title legal-title">
            Identité et coordonnées de l'éditeur
          </h3>
          <p>Ce site est édité par La Tournée des Toqués.</p>
          <ul>
            <li>Adresse : 8 avenue de la gourmandise, Chill City</li>
            <li>Email : contact@lestoques.fr</li>
          </ul>
          <ul>
            <li>
              Responsable de la publication : Michel LeGourmand, directeur
              général.
            </li>
            <li>Email : m.legourmand@lestoques.fr</li>
          </ul>
          <h3 className="secondary-title legal-title">
            Identité et coordonnées de l'hébergeur
          </h3>
          <p>
            Ce site et sa base de données sont hébergés en France sur les
            serveurs de l'hébergeur XXXXXX :
          </p>
          <ul>
            <li>Adresse : XXXX</li>
            <li>Site web : XXXX</li>
          </ul>
        </div>
        <div className="personal-data">
          <h3 className="secondary-title legal-title">
            Données personnelles & RGPD
          </h3>
          <p>
            L'entreprise La Tournée des Toqués, dont les coordonnées sont
            disponibles ci-dessus, collecte et traite des données personnelles
            afin d'assurer aux participants des foodtrucks une visibilité sur
            l'évènement et de les recontacter au besoin pour l'édition suivante.
            La collecte et le traitement des données effectué par l'entreprise
            La Tournée des Toqués a pour base légale les articles 6.1.a et 6.1.b
            du Règlement Européen pour la Protection des Données (RGPD).
          </p>
          <h3 className="secondary-title legal-title">Catégories de données</h3>
          <p>
            Les données à caractère personnel collectées sont les suivantes :
          </p>
          <ul>
            <li>
              Participants (propriétaires de foodtrucks) : nom, prénom, adresse
              électronique (email), nom du foodtruck, nom et photo du chef,
              carte du foodtruck.
            </li>
            <li>
              Visiteurs (formulaire de contact) : nom, prénom, adresse
              électronique (email), raison de la demande.
            </li>
          </ul>
          <h3 className="secondary-title legal-title">
            Conditions de la collecte et durée de conservation des données
          </h3>
          <p>
            Les données à caractère personnel sont collectées dans les cas
            suivants, et pour les durées indiquées :
          </p>
          <ul>
            <li>
              Identité : dès la création d'un compte utilisateur sur le site, et
              une semaine après la suppression du compte.
            </li>
            <li>
              Données relatives à l'activité professionnelle de la personne :
              dès la création d'un compte utilisateur sur le site et une semaine
              après la suppression du compte.
            </li>
            <li>
              Données du formulaire de contact : conservation pendant la durée
              nécessaire au traitement de la demande, puis suppression après un
              an.
            </li>
          </ul>
          <h3 className="secondary-title legal-title">
            Destinataires des données
          </h3>
          <p>
            Les employés de l'entreprise La Tournée des Toqués sont
            destinataires de l'ensemble des catégories de données à caractère
            personnel collectées. Les données collectées ne sont en aucun cas
            transmises à des tiers.
          </p>
          <h3 className="secondary-title legal-title">Vos droits</h3>
          <p>
            Conformément aux articles 16, 17, 18 et 20 du Règlement Européen
            pour la Protection des Données (RGPD), toute personne concernée par
            la collecte et le traitement de données effectué par l'entreprise La
            Tournée des Toqués peut exercer ses droits :
          </p>
          <ul>
            <li>
              Droit de rectification : les données personnelles peuvent être
              rectifiées sur simple demande par mail au DPO de l'entreprise ou
              directement depuis l'espace membre du site.
            </li>
            <li>
              Droit à l'effacement (droit à l'oubli) : les données personnelles
              peuvent être définitivement effacées sur simple demande par mail
              (via la rubrique Contact).
            </li>
            <li>
              Droit à la limitation du traitement des données : sur simple
              demande par mail, vous pouvez limiter certains traitements
              effectués sur vos données.
            </li>
            <li>
              Droit à la portabilité des données : sur simple demande par mail,
              toutes les données à caractère personnel concernant un utilisateur
              lui seront transmises au format CSV.
            </li>
          </ul>
          <h3 className="secondary-title legal-title">
            Délégué à la Protection des Données (DPO) & Responsable du
            Traitement
          </h3>
          <p>
            Tout utilisateur du site La Tournée des Toqués peut accéder aux
            données le concernant, les rectifier ou les faire effacer. Les
            utilisateurs disposent également d'un droit à la portabilité et d’un
            droit à la limitation du traitement des données (consultez le site{' '}
            <a href="https://www.cnil.fr/">cnil.fr</a> pour plus d’informations
            sur vos droits). Pour exercer ces droits ou pour toute question sur
            le traitement de vos données dans ce dispositif, vous pouvez
            contacter notre DPO :
          </p>
          <ul>
            <li>Par voie électronique : dpo@lestoques.fr</li>
            <li>
              Par courrier postal : 8 avenue de la gourmandise, Chill City
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
