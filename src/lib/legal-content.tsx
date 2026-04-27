import { ReactNode } from "react";
import { Lang } from "@/lib/translations";

export type LegalSlug = "politique-de-confidentialite" | "termes-et-conditions" | "questions-frequentes";

export const LEGAL_LABELS: Record<LegalSlug, { fr: string; en: string }> = {
  "politique-de-confidentialite": {
    fr: "Politique de confidentialité",
    en: "Privacy Policy",
  },
  "termes-et-conditions": {
    fr: "Termes et conditions",
    en: "Terms & Conditions",
  },
  "questions-frequentes": {
    fr: "Questions fréquentes",
    en: "FAQ",
  },
};

export const LEGAL_ORDER: LegalSlug[] = [
  "politique-de-confidentialite",
  "termes-et-conditions",
  "questions-frequentes",
];

export function getLegalContent(slug: LegalSlug, lang: Lang): ReactNode {
  if (slug === "politique-de-confidentialite") return lang === "fr" ? <PrivacyFR /> : <PrivacyEN />;
  if (slug === "termes-et-conditions") return lang === "fr" ? <TermsFR /> : <TermsEN />;
  return lang === "fr" ? <FaqFR /> : <FaqEN />;
}

/* ---------------- PRIVACY ---------------- */

const PrivacyFR = () => (
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

const PrivacyEN = () => (
  <div className="space-y-4">
    <p>Your privacy is a priority for us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website and our online booking services.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">1. Data collected</h4>
    <p>When you book an appointment with us, we may collect the following personal data:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>First and last name (to identify you and personalize the service).</li>
      <li>Email (to send appointment confirmations and notifications).</li>
      <li>Phone number (to contact you and send reminders).</li>
      <li>Date of birth (to ensure the service is appropriate for your age).</li>
    </ul>
    <p>Providing this information is necessary to process your booking.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">2. Purposes of data processing</h4>
    <p>Your data is collected and processed for the following purposes:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Managing and organizing your appointments.</li>
      <li>Sending confirmations, reminders, and information about your appointment.</li>
      <li>Contacting you in case of changes or cancellations.</li>
      <li>Improving our services and customer relationship.</li>
      <li>Complying with legal and regulatory obligations.</li>
    </ul>

    <h4 className="font-display text-lg font-light text-foreground mt-6">3. Legal basis for processing</h4>
    <p>The processing of your data is based on:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Your explicit consent (by accepting this Privacy Policy).</li>
      <li>The performance of a contract (to provide the services booked).</li>
    </ul>

    <h4 className="font-display text-lg font-light text-foreground mt-6">4. Data retention</h4>
    <p>Your data will be kept for as long as necessary to achieve the stated purposes or in accordance with legal obligations. To request the deletion of your data, see the "Your rights" section below.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">5. Data sharing</h4>
    <p>We do not sell, rent, or share your personal data with third parties, except when necessary to:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Service providers who help us manage appointments and customer service.</li>
      <li>Comply with legal or regulatory obligations.</li>
    </ul>
    <p>All third parties processing your data comply with GDPR rules to guarantee its security.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">6. Data security</h4>
    <p>We have implemented security measures to protect your data against unauthorized access, loss, or alteration, including:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Encryption and firewall protection.</li>
      <li>Restricted access limited to authorized employees.</li>
      <li>Use of secure servers located in the European Union.</li>
    </ul>

    <h4 className="font-display text-lg font-light text-foreground mt-6">7. Your rights</h4>
    <p>Under the GDPR, you have the following rights regarding your data:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Access: Request a copy of the data we hold about you.</li>
      <li>Rectification: Correct inaccurate or outdated information.</li>
      <li>Deletion: Request the deletion of your data.</li>
      <li>Restriction: Limit the use of your data.</li>
      <li>Portability: Receive your data in an electronic format.</li>
      <li>Objection: Refuse the use of your data for certain purposes.</li>
    </ul>
    <p>To exercise your rights, contact us at: camillarochastudio@gmail.com.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">8. Cookies and tracking technologies</h4>
    <p>Our website may use cookies to improve your user experience. When accessing the site, you will be able to accept or refuse the use of cookies through our consent banner.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">9. Changes to this policy</h4>
    <p>We may update this Privacy Policy at any time. We recommend reviewing it regularly to stay informed of any changes.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">10. Contact</h4>
    <p>If you have any questions about this Privacy Policy or the processing of your data, please contact us:</p>
    <p>📧 Email: camillarochastudio@gmail.com</p>
  </div>
);

/* ---------------- TERMS ---------------- */

const TermsFR = () => (
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
    <p>Les clientes ayant déjà réalisé une micropigmentation avec un autre professionnel NE PEUVENT PAS réserver une séance de Nanoblading/Soft Shading/Technique Hybride avec moi. Pour réaliser un procédé, il est nécessaire d'abord de retirer la micropigmentation antérieure au laser et de prendre rendez-vous pour une consultation afin d'évaluer l'intégrité de la peau, des poils et d'éventuels résidus de pigment. Si la cliente ne suit pas ces règles et réserve un rendez-vous sans retirer la micropigmentation antérieure, et si des résidus de pigment sont identifiés le jour du procédé, celui-ci sera annulé et le dépôt ne sera pas remboursé.</p>

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

const TermsEN = () => (
  <div className="space-y-4">
    <h4 className="font-display text-lg font-light text-foreground">1. BOOKING, CANCELLATION AND RESCHEDULING POLICY</h4>

    <p><strong>1.1 BOOKING:</strong> All bookings require a payment of 30% of the service price. This amount will be deducted from the total amount due.</p>

    <p><strong>1.2 CANCELLATION AND RIGHT TO REFUND</strong></p>
    <p>In accordance with our booking rules, the client has 7 days after paying the deposit to request a full refund, provided these 7 days do not fall within the 48 hours preceding the booked service.</p>
    <p>In other words, if the appointment date is less than 48 hours away, no refund can be issued, even if the 7-day window has not yet expired.</p>
    <p>Outside of this refund right, any modification or cancellation follows these rules:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Regular services (brows, lashes, combos, evaluation consultation): The appointment can be changed at least 24 hours in advance.</li>
      <li>Micropigmentation services and touch-ups: The appointment must be changed at least 48 hours in advance.</li>
    </ul>

    <p><strong>Deposit conditions</strong></p>
    <p>For any cancellation or rescheduling made within the indicated timeframes, the deposit is not refunded but remains valid as credit for a future service.</p>
    <p>The client has a maximum of 2 (TWO) reschedules within the allowed timeframes.</p>
    <p>From the third request onwards, or in case of late cancellation/rescheduling, the deposit will be considered lost, and a new deposit will be required to confirm a new appointment.</p>
    <p>Reschedules can be made up to 48 hours in advance through the booking platform. The rescheduling link is sent by email together with the appointment confirmation. For rescheduling within less than 48 hours, the client must contact us via WhatsApp.</p>

    <p><strong>1.3 NO-SHOW</strong></p>
    <p>In case of no-show without prior notice, the deposit will be automatically lost.</p>
    <p>To book a new slot, the client will have to pay a penalty equivalent to 50% of the booked service price.</p>
    <p>This penalty is intended to cover the blocked time and the preparation required for the service.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">2. CHOICE OF MICROPIGMENTATION TECHNIQUES</h4>
    <p>The choice of technique (Nanoblading, Soft Shading or Hybrid Technique) is made BY THE PROFESSIONAL after evaluating the health history, skin type, and natural eyebrows of each client, in order to guarantee the naturalness and long-term safety of the procedure. Not all skin types tolerate every type of procedure. The client will be heard, but the final decision belongs to the professional. No procedure will be performed if there is a long-term risk. If the technique is performed without taking these risks into account, it may cause scarring or staining. The final result is always unique and individual. Some skins absorb more pigment, others less. There is no guarantee that the result will match the client's expectations or any reference values. The procedure consists of two sessions: the first session and a touch-up after 30 to 60 days. The professional is not responsible if the client does not attend the touch-up within this timeframe and notices fading or fixation issues afterwards.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">3. DURABILITY</h4>
    <p>The durability of the techniques ranges from 8 to 18 months, and can reach up to 2 years on more mature or resistant skin. Durability also depends on skin care. Essential care, such as avoiding sun exposure and keeping the skin hydrated, significantly influences the long-term result. Oily skin, excessive sun exposure, smoking, and lack of care can lead to reduced pigment retention, color changes, and durability of less than 1 year. It is recommended to apply sunscreen daily on the eyebrows, avoid excessive sun exposure, and maintain good hydration to improve durability and achieve a more beautiful result.</p>
    <p>It is important to note that a durability of 8 to 18 months does not mean the color will start fading immediately after that period. Pigment fading and lightening are natural processes that occur with each cycle of skin regeneration (about every 28-30 days). Therefore, it is normal for the color to lighten by about 40% after 6 months. This should not be a reason for a new touch-up. Frequent touch-ups before the previous pigment fades can cause staining and scarring.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">4. ONE-MONTH TOUCH-UP AND ANNUAL TOUCH-UPS</h4>
    <p>The touch-up must be performed between 30 and 60 days after the first session. The client must ensure availability during this period. Clients who do not attend the touch-up will lose the right to perform it for skin health and integrity reasons.</p>
    <p>If the client needs to reschedule the touch-up, they must follow the cancellation and rescheduling policy, in accordance with the rules relating to micropigmentation.</p>
    <p>The annual micropigmentation touch-up should be done between 1.5 and 2 years after the initial session, or when the color has faded by about 80%. Clients who have previously had micropigmentation with us benefit from a 30% discount on the current price for this touch-up.</p>
    <p>Pigment elimination is an individual process. Better-cared-for skin and younger people expel pigment faster, while those over 40, with immune deficiencies, or under continuous medication may take longer to expel the pigment. The professional cannot be held responsible for the duration of the pigment, as it varies from one organism to another.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">5. TOUCH-UPS OF PROCEDURES PERFORMED BY OTHER PROFESSIONALS</h4>
    <p>Clients who have previously had micropigmentation done by another professional CANNOT book a Nanoblading/Soft Shading/Hybrid Technique session with me. To carry out a procedure, it is first necessary to remove the previous micropigmentation with laser and book a consultation to assess the integrity of the skin, hair, and any pigment residue. If the client does not follow these rules and books an appointment without removing the previous micropigmentation, and if pigment residues are identified on the day of the procedure, it will be cancelled and the deposit will not be refunded.</p>

    <h4 className="font-display text-lg font-light text-foreground mt-6">6. CONTRAINDICATIONS (micropigmentation)</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Pregnant/breastfeeding women (breastfeeding women may have the procedure only if the baby is over 1 year old, breastfeeding is not exclusive, and a written and signed MEDICAL AUTHORIZATION is provided).</li>
      <li>People undergoing oncological treatment (chemotherapy/radiotherapy).</li>
      <li>People with Anaemia, Lupus or Hepatitis (in case of anaemia, the procedure may be performed if iron supplementation treatment is being followed).</li>
      <li>Active dermatitis, psoriasis, or rosacea affecting the eyebrow area.</li>
      <li>People prone to hypertrophic scarring (thick, raised scars).</li>
      <li>Active vitiligo.</li>
      <li>HIV.</li>
      <li>Uncontrolled diabetics.</li>
      <li>People who have had botox in the forehead or eyebrow area less than 30 days before the procedure.</li>
      <li>People taking anticoagulants.</li>
      <li>During ROACCUTANE treatment (only after at least 3 months after the end of treatment).</li>
      <li>Recent surgeries (a minimum of 2 months must elapse between any surgical intervention and micropigmentation).</li>
      <li>Recent use of antibiotics (a minimum of 1 week must elapse before the procedure).</li>
      <li>Haemophilia carriers.</li>
      <li>History of allergies to propylene glycol, vegetable glycerine, dyes, or isopropyl alcohol.</li>
    </ul>
  </div>
);

/* ---------------- FAQ ---------------- */

const FaqFR = () => (
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

const FaqEN = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">How long does micropigmentation last?</h4>
      <p>Durability varies from person to person (skin type, aftercare, metabolism). On average: 8 to 12 months for nanoblading and 10 to 15 months for Soft Shading / hybrid technique.</p>
      <p className="mt-2">A touch-up is recommended after complete healing (around 30 days) to perfect the result.</p>
      <p className="mt-2">Over time, the pigment fades naturally (cell renewal, sun exposure). It is a long-lasting but not permanent solution.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Can my eyebrows turn blue or green?</h4>
      <p>No. The techniques I use are very superficial, which prevents color changes.</p>
      <p className="mt-2">Unlike older methods (such as microblading), which are deeper and longer-lasting and may shift with time and sun exposure.</p>
      <p className="mt-2">I also use high-quality, stable, and reliable pigments.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">What is the difference between nanoblading and microblading?</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Finesse: nanoblading uses ultra-fine needles for a very natural, hair-by-hair effect.</li>
        <li>Duration: nanoblading (8 to 12 months) vs microblading (2 to 5 years).</li>
        <li>Depth: nanoblading is more superficial, which guarantees a more natural and stable result over time.</li>
        <li>Result: nanoblading offers a subtle finish that evolves harmoniously. Microblading can become more marked or shift in tone over time.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Is the procedure painful?</h4>
      <p>No, the treatment is very comfortable. Most clients only feel mild discomfort, thanks to a gentle and adapted technique.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Is nanoblading suitable for all skin types?</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Ideal for normal, dry, and combination skin.</li>
        <li>On oily skin, retention may be slightly reduced.</li>
        <li>For very mature skin, Soft Shading is generally more suitable.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">How does healing work?</h4>
      <p>Eyebrows may appear darker in the first days, then a light flaking may occur.</p>
      <p className="mt-2">The final result is visible after 4 to 6 weeks.</p>
      <p className="mt-2">During healing: avoid sun, swimming pools, makeup on the area, and follow the recommended aftercare (explained on the day).</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Do I need a touch-up?</h4>
      <p>Yes, it is essential to fix the color and correct small details.</p>
      <p className="mt-2">To be done between 30 and 45 days after the first session.</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">How does the color evolve?</h4>
      <p>The pigment gradually lightens towards natural tones, without turning red or gray (with quality pigments).</p>
    </div>

    <div>
      <h4 className="font-display text-base font-medium text-foreground mb-2">Who cannot have nanoblading?</h4>
      <p>The treatment is not recommended for pregnant or breastfeeding women, people on isotretinoin (Roaccutane), uncontrolled diabetics, people prone to keloids, or with active skin diseases on the area.</p>
      <p className="mt-2">A prior consultation is recommended.</p>
    </div>
  </div>
);
