/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Questions.scss';

const Questions = () => {
  const [activeTab, setActiveTab] = useState('access');

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="questions pdg-lr">
      <h2 className="highlight-title">Une question ?</h2>
      <div className="tab-container">
        <ul className="tab-menu">
          <button
            type="button"
            className={`tab ${activeTab === 'access' ? 'active' : ''}`}
            onClick={() => switchTab('access')}
          >
            Accès
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => switchTab('services')}
          >
            Services
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'animals' ? 'active' : ''}`}
            onClick={() => switchTab('animals')}
          >
            Animaux
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => switchTab('security')}
          >
            Sécurité
          </button>
        </ul>

        <div className="tab-panels">
          <div className={`panel ${activeTab === 'access' ? 'active' : ''}`}>
            <h3>Accès et transport</h3>
            <h4>En train : </h4>
            <p>
              La gare de Chill City est idéalement située à seulement 10 minutes
              à pied du site du festival. Cette gare est bien desservie avec des
              trains fréquents en provenance des grandes villes voisines. Vous
              pourrez rejoindre le festival en toute simplicité après un court
              trajet agréable à travers la ville.
            </p>

            <h4>En voiture :</h4>
            <p>
              Pour ceux qui préfèrent venir en voiture, le festival est
              accessible via les sorties d'autoroute suivantes : Sortie 24 -
              Chill-Nord : À 5 km du site, avec un accès direct par l'avenue des
              Saveurs. Sortie 25 - Chill-Sud : À 7 km du site, en passant par la
              route des Délices. Des parkings gratuits et payants sont
              disponibles à proximité du site. Nous vous recommandons d'utiliser
              le parking P1 situé à 200 mètres de l'entrée principale pour un
              accès rapide et pratique.
            </p>

            <h4>En bus : </h4>
            <p>
              Le réseau de bus local dessert directement le site du festival
              avec plusieurs lignes. Les lignes 5, 12 et 23 vous déposeront à
              l'arrêt "Parc de l'apéro" situé juste à l'entrée du site. Des bus
              spéciaux seront également mis en place pendant toute la durée du
              festival pour faciliter vos déplacements.
            </p>
          </div>

          <div className={`panel ${activeTab === 'services' ? 'active' : ''}`}>
            <h3>Services et commodités</h3>
            <p>
              Profitez pleinement de votre journée au festival grâce à nos
              nombreux services et commodités pensés pour votre confort et votre
              bien-être.
            </p>

            <h4>Espaces de pique-nique :</h4>
            <p>
              Des espaces de pique-nique aménagés vous permettront de savourer
              vos plats préférés en plein air. Profitez de tables et de bancs
              pour partager un repas convivial en famille ou entre amis.
            </p>

            <h4>Eau potable :</h4>
            <p>
              Des points d'eau potable sont stratégiquement installés à
              plusieurs endroits du site. Vous pourrez vous hydrater
              gratuitement tout au long de la journée. N'oubliez pas d'apporter
              votre gourde réutilisable pour contribuer à la réduction des
              déchets plastiques !
            </p>

            <h4>Coin de change et toilettes :</h4>
            <p>
              Pour les familles avec de jeunes enfants, des coins de change
              propres et confortables sont disponibles. Équipés de tables à
              langer, de sièges confortables et de produits de soin essentiels,
              ces espaces vous permettront de prendre soin de vos petits en
              toute tranquillité. Nous mettons un point d'honneur à maintenir
              des toilettes propres et bien entretenues sur tout le site. Des
              équipes de nettoyage dédiées veillent à ce que vous trouviez des
              installations sanitaires impeccables à tout moment de la journée.
            </p>
          </div>

          <div className={`panel ${activeTab === 'animals' ? 'active' : ''}`}>
            <h3>Animaux de compagnie</h3>
            <p>
              Nous accueillons avec plaisir les animaux de compagnie tenus en
              laisse au festival de foodtrucks ! Si vous souhaitez emmener votre
              compagnon à quatre pattes avec vous, veuillez le maintenir en
              laisse pendant toute la durée de votre visite. Cette politique
              vise à assurer la sécurité et le confort de tous les visiteurs.
              N'oubliez pas de ramasser après votre animal et de respecter les
              autres festivaliers.
            </p>
          </div>

          <div className={`panel ${activeTab === 'security' ? 'active' : ''}`}>
            <h3>Sécurité et Premiers Secours</h3>
            <p>
              Votre sécurité est notre priorité absolue. À Chill-City, nous
              avons mis en place des mesures rigoureuses pour garantir que vous
              puissiez profiter du festival en toute tranquillité.
            </p>

            <h4>Accès handicapé :</h4>
            <p>
              Nous avons veillé à ce que le festival soit accessible à tous. Des
              rampes d'accès, des chemins aménagés et des toilettes adaptées
              sont disponibles pour les personnes à mobilité réduite. Si vous
              avez besoin d'une assistance particulière, notre personnel est là
              pour vous aider.
            </p>

            <h4>Contrôle des sacs à l'entrée :</h4>
            <p>
              Pour assurer la sécurité de tous, des contrôles des sacs sont
              effectués à chaque entrée du festival. Notre personnel de sécurité
              inspectera vos sacs pour s'assurer qu'aucun objet interdit ou
              dangereux ne soit introduit sur le site. Nous vous remercions de
              votre coopération et de votre compréhension.
            </p>

            <h4>Équipe de secours sur place :</h4>
            <p>
              Une équipe de secours qualifiée est présente en permanence sur le
              site pour répondre à toute urgence médicale. Des postes de
              premiers secours sont stratégiquement situés à plusieurs endroits
              du festival. En cas de besoin, n'hésitez pas à vous rendre à l'un
              de ces postes ou à demander l'aide de notre personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
