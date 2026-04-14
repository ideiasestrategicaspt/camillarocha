import { useState } from "react";
import { X } from "lucide-react";

type ModalKey = "privacy" | "terms" | "faq" | null;

const FOOTER_ITEMS: { key: Exclude<ModalKey, null>; label: string }[] = [
  { key: "privacy", label: "Politique de confidentialité" },
  { key: "terms", label: "Termes et conditions" },
  { key: "faq", label: "Questions fréquentes" },
];

const Footer = () => {
  const [open, setOpen] = useState<ModalKey>(null);

  return (
    <>
      <div className="border-t border-gold/15 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {FOOTER_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => setOpen(item.key)}
                className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Camilla Rocha Brows
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-6"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-background max-w-2xl w-full max-h-[80vh] overflow-y-auto p-10 md:p-14 relative animate-fade-in-scale shadow-2xl"
            style={{ boxShadow: "0 20px 60px -12px hsl(32 40% 72% / 0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">
              {FOOTER_ITEMS.find((i) => i.key === open)?.label}
            </h3>
            <div className="font-body text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {open === "privacy" && <PrivacyContent />}
              {open === "terms" && <TermsContent />}
              {open === "faq" && <FaqContent />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PrivacyContent = () => (
  <div className="space-y-4">
    <p>Votre confidentialité est une priorité pour nous. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site et nos services de prise de rendez-vous en ligne.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">1. Données collectées</h4>
    <p>Lorsque vous prenez rendez-vous avec nous, nous pouvons collecter les données personnelles suivantes :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Nom et prénom (pour l'identification et la personnalisation du service).</li>
      <li>E-mail (pour l'envoi de confirmations et de notifications de rendez-vous).</li>
      <li>Numéro de téléphone (pour vous contacter et vous envoyer des rappels).</li>
      <li>Date de naissance (pour garantir l'adéquation du service à votre âge).</li>
    </ul>
    <p>La fourniture de ces informations est nécessaire pour traiter votre réservation.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">2. Finalités du traitement des données</h4>
    <p>Vos données sont collectées et traitées aux fins suivantes :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Gérer et organiser vos rendez-vous.</li>
      <li>Envoyer des confirmations, rappels et informations sur votre rendez-vous.</li>
      <li>Vous contacter en cas de modification ou d'annulation.</li>
      <li>Améliorer nos services et notre relation client.</li>
      <li>Respecter les obligations légales et réglementaires.</li>
    </ul>

    <h4 className="font-display text-lg font-light text-foreground mt-6">3. Base légale du traitement</h4>
    <p>Le traitement de vos données repose sur :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Votre consentement explicite (en acceptant cette Politique de Confidentialité).</li>
      <li>L'exécution d'un contrat (afin de vous fournir les services réservés).</li>
    </ul>

    <h4 className="font-display text-lg font-light text-foreground mt-6">4. Durée de conservation des données</h4>
    <p>Vos données seront conservées aussi longtemps que nécessaire pour atteindre les objectifs mentionnés ou conformément aux obligations légales. Pour demander la suppression de vos données, consultez la section "Vos droits" ci-dessous.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">5. Partage des données</h4>
    <p>Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers, sauf si nécessaire pour :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Les prestataires de services qui nous aident à gérer les rendez-vous et le service client.</li>
      <li>Respecter les obligations légales ou réglementaires.</li>
    </ul>
    <p>Tous les tiers qui traitent vos données respectent les règles du RGPD pour garantir leur sécurité.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">6. Sécurité des données</h4>
    <p>Nous avons mis en place des mesures de sécurité pour protéger vos données contre tout accès non autorisé, perte ou modification, notamment :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Cryptage et protection par pare-feu.</li>
      <li>Accès restreint aux données uniquement aux employés autorisés.</li>
      <li>Utilisation de serveurs sécurisés situés dans l'Union Européenne.</li>
    </ul>

    <h4 className="font-display text-lg font-light text-foreground mt-6">7. Vos droits</h4>
    <p>Conformément au RGPD, vous avez les droits suivants concernant vos données :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Accès : Demander une copie des données que nous détenons sur vous.</li>
      <li>Rectification : Corriger des informations incorrectes ou obsolètes.</li>
      <li>Suppression : Demander la suppression de vos données.</li>
      <li>Limitation du traitement : Restreindre l'utilisation de vos données.</li>
      <li>Portabilité : Recevoir vos données dans un format électronique.</li>
      <li>Opposition : Refuser l'utilisation de vos données pour certaines finalités.</li>
    </ul>
    <p>Pour exercer vos droits, contactez-nous à l'adresse e-mail suivante : camillarochastudio@gmail.com.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">8. Cookies et technologies de suivi</h4>
    <p>Notre site peut utiliser des cookies pour améliorer votre expérience utilisateur. Lors de votre accès au site, vous aurez la possibilité d'accepter ou de refuser l'utilisation des cookies via notre bandeau de consentement.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">9. Modifications de cette politique</h4>
    <p>Nous pouvons mettre à jour cette Politique de Confidentialité à tout moment. Nous vous recommandons de la consulter régulièrement pour être informé de toute modification.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">10. Contact</h4>
    <p>Si vous avez des questions concernant cette Politique de Confidentialité ou le traitement de vos données, veuillez nous contacter :</p>
    <p>📧 E-mail : camillarochastudio@gmail.com</p>
  </div>
);

const TermsContent = () => (
  <div className="space-y-4">
    <h4 className="font-display text-lg font-light text-foreground">1. RÈGLES DE RÉSERVATION, D'ANNULATION ET DE REPROGRAMMATION</h4>

    <p><strong>1.1 RÉSERVATION :</strong> Toutes les réservations nécessitent le paiement de 30 % du tarif de la prestation. Ce montant sera déduit du montant total à régler.</p>

    <p><strong>1.2 ANNULATION ET DROIT DE REMBOURSEMENT</strong></p>
    <p>Conformément à nos règles de réservation, le client dispose d'un délai de 7 jours après l'achat de l'acompte pour demander un remboursement intégral, à condition que ces 7 jours ne se situent pas dans les 48 heures précédant la prestation réservée.</p>
    <p>Autrement dit, si la date du rendez-vous est dans moins de 48 heures, aucun remboursement ne pourra être effectué, même si les 7 jours suivant l'achat ne sont pas encore écoulés.</p>
    <p>En dehors de ce droit de remboursement, toute modification ou annulation suit les règles suivantes :</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Services réguliers (sourcils, cils, combos, consultation d'évaluation) : Le rendez-vous peut être modifié au minimum 24 heures à l'avance.</li>
      <li>Services de micropigmentation et retouches : Le rendez-vous doit être modifié au minimum 48 heures à l'avance.</li>
    </ul>

    <p><strong>Conditions liées à l'acompte</strong></p>
    <p>Pour toute annulation ou reprogrammation effectuée dans les délais indiqués, l'acompte n'est pas remboursé, mais reste valable comme crédit pour une future prestation.</p>
    <p>Le client dispose d'un maximum de 2 (DEUX) reprogrammations dans les délais prévus.</p>
    <p>À partir de la troisième demande, ou en cas d'annulation/reprogrammation hors délai, l'acompte sera considéré comme perdu, et un nouvel acompte sera exigé pour confirmer un nouveau rendez-vous.</p>
    <p>Les reprogrammations peuvent être effectuées jusqu'à 48 heures à l'avance via la plateforme de réservation. Le lien de reprogrammation est envoyé par e-mail avec la confirmation du rendez-vous. Pour une reprogrammation à moins de 48 heures, le client doit nous contacter via WhatsApp.</p>

    <p><strong>1.3 ABSENCE SANS PRÉAVIS</strong></p>
    <p>En cas de non-présentation au rendez-vous sans aucun avis préalable, le dépôt sera automatiquement perdu.</p>
    <p>Pour réserver un nouveau créneau, le client devra régler une pénalité équivalente à 50 % du prix du service réservé.</p>
    <p>Cette pénalité vise à couvrir le temps bloqué et les préparatifs nécessaires à la prestation.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">2. CHOIX DES TECHNIQUES DE MICROPIGMENTATION</h4>
    <p>Le choix de la technique (Nanoblading, Soft Shading ou Technique Hybride) est effectué PAR LE PROFESSIONNEL après une évaluation de l'historique de santé, du type de peau et des sourcils naturels de chaque client, afin de garantir la naturalité et la sécurité à long terme du procédé. Toutes les peaux ne supportent pas tous les types de procédures. Le client sera écoutée, mais la décision finale appartient au professionnel. Aucun procédé ne sera effectué en cas de risque à long terme. Si la technique est exécutée sans prendre en compte ces risques, cela peut entraîner des cicatrices ou des taches. Le résultat final est toujours unique et individuel. Certaines peaux absorbent plus de pigment, d'autres moins. Il n'y a aucune garantie que le résultat corresponde aux attentes du client ou aux valeurs de référence. La procédure se compose de deux séances : la première séance et une retouche après 30 à 60 jours. Le professionnel n'est pas responsable si le client ne se présente pas pour la retouche dans ce délai et constate des problèmes de décoloration ou de fixation après cette période.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">3. DURABILITÉ</h4>
    <p>La durabilité des techniques varie de 8 à 18 mois, pouvant atteindre jusqu'à 2 ans dans le cas de peaux plus matures ou résistantes. La durabilité dépend également des soins apportés à la peau. Des soins essentiels, tels que l'évitement de l'exposition au soleil et l'hydratation de la peau, influencent considérablement le résultat à long terme. Les peaux grasses, une exposition excessive au soleil, le tabagisme et le manque de soins peuvent entraîner une fixation réduite du pigment, des changements de couleur et une durabilité inférieure à 1 an. Il est recommandé d'utiliser un écran solaire quotidiennement sur les sourcils, ainsi que d'éviter l'exposition excessive au soleil et de maintenir une bonne hydratation pour améliorer la durabilité et obtenir des résultats plus beaux.</p>
    <p>Il est important de noter que la durabilité de 8 à 18 mois ne signifie pas que la couleur commencera à s'estomper immédiatement après cette période. La dégradation et l'éclaircissement du pigment sont des processus naturels, qui se produisent à chaque cycle de régénération de la peau (environ tous les 28-30 jours). Ainsi, il est normal que la couleur s'éclaircisse d'environ 40 % après 6 mois. Cela ne doit pas être un motif pour une nouvelle retouche. Faire des retouches fréquentes avant que le pigment précédent ne disparaisse peut provoquer des taches et des cicatrices.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">4. RETOUCHE APRÈS 1 MOIS ET RETOUCHES ANNUELLES</h4>
    <p>La retouche doit être effectuée entre 30 et 60 jours après la première séance. Le client doit s'assurer qu'il sera disponible pendant cette période. Les clients qui ne se présenteront pas à la retouche perdront leur droit de la réaliser pour des raisons de santé et d'intégrité de la peau.</p>
    <p>Si le client doit reprogrammer la retouche, il devra respecter la politique d'annulation et de reprogrammation, conformément aux règles relatives à la micropigmentation.</p>
    <p>La retouche annuelle de micropigmentation doit être effectuée entre 1,5 et 2 ans après la séance initiale, ou lorsque la couleur a diminué d'environ 80 %. Les clientes ayant déjà effectué une micropigmentation avec nous bénéficient d'une remise de 30 % sur le tarif actuel pour cette retouche.</p>
    <p>L'élimination du pigment est un processus individuel. Les peaux mieux soignées et les personnes plus jeunes expulsent plus rapidement le pigment, tandis que celles de plus de 40 ans, avec des déficits immunitaires ou sous traitement médicamenteux continu, peuvent prendre plus de temps à expulser le pigment. Le professionnel ne peut être tenu responsable de la durée du pigment, car cela varie d'un organisme à l'autre.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">5. RETOUCHES DE PROCÉDURES RÉALISÉES PAR D'AUTRES PROFESSIONNELS</h4>
    <p>Les clientes ayant déjà réalisé une micropigmentation avec un autre professionnel NE PEUVENT PAS réserver une séance de Nanoblading/Soft Shading/Técnica Hybride avec moi. Pour réaliser un procédé, il est nécessaire d'abord de retirer la micropigmentation antérieure au laser et de prendre rendez-vous pour une consultation afin d'évaluer l'intégrité de la peau, des poils et d'éventuels résidus de pigment. Si la cliente ne suit pas ces règles et réserve un rendez-vous sans retirer la micropigmentation antérieure, et si des résidus de pigment sont identifiés le jour du procédé, celui-ci sera annulé et le dépôt ne sera pas remboursé.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">6. CONTRE-INDICATIONS (micropigmentation)</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Femmes enceintes/allaitantes (les femmes allaitantes peuvent réaliser la procédure uniquement si le bébé a plus de 1 an, l'allaitement n'est pas exclusif et qu'une AUTORISATION MÉDICALE est fournie par écrit et signée).</li>
      <li>Personnes en traitement oncologique (chimiothérapie/radiothérapie).</li>
      <li>Personnes atteintes d'Anémie, Lupus ou Hépatite (en cas d'anémie, le procédé peut être effectué si un traitement avec supplément de fer est suivi).</li>
      <li>Dermatite, psoriasis ou rosacée en phase active ou affectant la zone des sourcils.</li>
      <li>Personnes ayant tendance à former des cicatrices hypertrophiques (cicatrices épaisses et élevées).</li>
      <li>Vitiligo en phase active.</li>
      <li>VIH.</li>
      <li>Personnes diabétiques non contrôlées.</li>
      <li>Personnes ayant fait du botox dans la région du front ou des sourcils moins de 30 jours avant la procédure.</li>
      <li>Personnes prenant des anticoagulants.</li>
      <li>Pendant le traitement par ROACUTAN (uniquement après au moins 3 mois après la fin du traitement).</li>
      <li>Chirurgies récentes (un délai minimum de 2 mois doit être respecté entre toute intervention chirurgicale et la micropigmentation).</li>
      <li>Usage récent d'antibiotiques (un délai de 1 semaine minimum doit être respecté avant le procédé).</li>
      <li>Porteurs de l'hémophilie.</li>
      <li>Antécédents d'allergies au propylène glycol, à la glycérine végétale, aux colorants, à l'alcool isopropylique.</li>
    </ul>
  </div>
);

const FaqContent = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Quelle est la durée de la micropigmentation ?</h4>
      <p>La tenue varie selon chaque personne (type de peau, soins post-traitement, métabolisme). En moyenne : 8 à 12 mois pour le nanoblading et 10 à 15 mois pour le Soft Shading / technique hybride.</p>
      <p className="mt-2">Une retouche est recommandée après cicatrisation complète (environ 30 jours) pour perfectionner le résultat.</p>
      <p className="mt-2">Avec le temps, le pigment s'estompe naturellement (renouvellement cellulaire, soleil). Il s'agit donc d'une solution durable, mais non permanente.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Mes sourcils peuvent-ils devenir bleus ou verts ?</h4>
      <p>Non. Les techniques que j'utilise sont très superficielles, ce qui évite les changements de couleur.</p>
      <p className="mt-2">Contrairement aux anciennes méthodes (comme le microblading), plus profondes et durables, qui peuvent évoluer avec le temps et l'exposition au soleil.</p>
      <p className="mt-2">J'utilise également des pigments de haute qualité, stables et fiables.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Quelle est la différence entre le nanoblading et le microblading ?</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Finesse : le nanoblading utilise des aiguilles ultra-fines pour un effet très naturel, poil à poil.</li>
        <li>Durée : nanoblading (8 à 12 mois) vs microblading (2 à 5 ans).</li>
        <li>Profondeur : le nanoblading est plus superficiel, ce qui garantit un résultat plus naturel et stable dans le temps.</li>
        <li>Résultat : le nanoblading offre un rendu subtil et évolue de façon harmonieuse. Le microblading peut devenir plus marqué ou changer de teinte avec le temps.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Le procédé est-il douloureux ?</h4>
      <p>Non, le traitement est très confortable. La majorité des clientes ressentent seulement une légère gêne, grâce à une technique douce et adaptée.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Le nanoblading convient-il à tous les types de peau ?</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Idéal pour les peaux normales, sèches et mixtes.</li>
        <li>Sur peaux grasses, la tenue peut être légèrement réduite.</li>
        <li>Pour les peaux très matures, le Soft Shading est généralement plus adapté.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Comment se déroule la cicatrisation ?</h4>
      <p>Les sourcils peuvent être plus foncés les premiers jours, puis une légère desquamation peut apparaître.</p>
      <p className="mt-2">Le résultat final est visible après 4 à 6 semaines.</p>
      <p className="mt-2">Pendant la cicatrisation : éviter soleil, piscine, maquillage sur la zone et suivre les soins conseillés (expliqués le jour J).</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Dois-je faire une retouche ?</h4>
      <p>Oui, elle est essentielle pour fixer la couleur et corriger les petits détails.</p>
      <p className="mt-2">À réaliser entre 30 et 45 jours après la première séance.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Comment évolue la couleur ?</h4>
      <p>Le pigment s'éclaircit progressivement vers des tons naturels, sans virer au rouge ou au gris (avec des pigments de qualité).</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Qui ne peut pas faire de nanoblading ?</h4>
      <p>Le traitement est déconseillé aux femmes enceintes ou allaitantes, aux personnes sous isotrétinoïne (Roaccutane), aux diabétiques non équilibrés, aux personnes sujettes aux chéloïdes ou ayant des maladies de peau actives sur la zone.</p>
      <p className="mt-2">Un avis préalable est recommandé.</p>
    </div>
  </div>
);

export default Footer;
