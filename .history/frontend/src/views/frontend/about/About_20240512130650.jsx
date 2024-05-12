import { assets } from "./../../../assets/assets";

function AboutPage() {
  return (
    <div id="about" className="w-full h-auto">
      <div className="flex flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full">
          <h1 className="text-3xl text-white">About me</h1>
          <div className="flex flex-col mb-10 h-[10px] w-full justify-between">
            <div className="bg-yellowClaire xl:w-[20%] lg:w-[25%] w-[50%] h-[2px]"></div>
            <div className="bg-yellowClaire xl:w-[15%] lg:w-[20%] w-[40%] h-[2px]"></div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row xl:flex-row w-full h-auto">
          <section className="w-auto h-auto lg:w-[100vh] xl:w-[100vh]">
            <img
              src={assets.carlie}
              alt="image"
              className="w-[100vh] xl:w-[100vh] lg:w-[100vh] h-auto overflow-hidden"
            />
          </section>
          <section className="flex items-center justify-center lg:ml-5 xl:ml-5 w-full">
            <div className="bg-greyGlass w-[85%] xl:h-[80%] lg:h-[80%] rounded h-[75vh] p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex h-full w-full justify-between flex-col">
                <div className="bg-yellowClaire w-full h-1"></div>
                <section className="h-full w-full overflow-auto text-white py-4">
                  Siquis enim militarium vel honoratorum aut nobilis inter suos
                  rumore tenus esset insimulatus fovisse partes hostiles,
                  iniecto onere catenarum in modum beluae trahebatur et inimico
                  urgente vel nullo, quasi sufficiente hoc solo, quod nominatus
                  esset aut delatus aut postulatus, capite vel multatione
                  bonorum aut insulari solitudine damnabatur. Oportunum est, ut
                  arbitror, explanare nunc causam, quae ad exitium praecipitem
                  Aginatium inpulit iam inde a priscis maioribus nobilem, ut
                  locuta est pertinacior fama. nec enim super hoc ulla
                  documentorum rata est fides. Quaestione igitur per multiplices
                  dilatata fortunas cum ambigerentur quaedam, non nulla levius
                  actitata constaret, post multorum clades Apollinares ambo
                  pater et filius in exilium acti cum ad locum Crateras nomine
                  pervenissent, villam scilicet suam quae ab Antiochia vicensimo
                  et quarto disiungitur lapide, ut mandatum est, fractis
                  cruribus occiduntur. Haec igitur Epicuri non probo, inquam. De
                  cetero vellem equidem aut ipse doctrinis fuisset instructior
                  est enim, quod tibi ita videri necesse est, non satis politus
                  iis artibus, quas qui tenent, eruditi appellantur aut ne
                  deterruisset alios a studiis. quamquam te quidem video minime
                  esse deterritum. Illud autem non dubitatur quod cum esset
                  aliquando virtutum omnium domicilium Roma, ingenuos advenas
                  plerique nobilium, ut Homerici bacarum suavitate Lotophagi,
                  humanitatis multiformibus officiis retentabant. Et quoniam
                  inedia gravi adflictabantur, locum petivere Paleas nomine,
                  vergentem in mare, valido muro firmatum, ubi conduntur nunc
                  usque commeatus distribui militibus omne latus Isauriae
                  defendentibus adsueti. circumstetere igitur hoc munimentum per
                  triduum et trinoctium et cum neque adclivitas ipsa sine
                  discrimine adiri letali, nec cuniculis quicquam geri posset,
                  nec procederet ullum obsidionale commentum, maesti excedunt
                  postrema vi subigente maiora viribus adgressuri. Verum ad
                  istam omnem orationem brevis est defensio. Nam quoad aetas M.
                  Caeli dare potuit isti suspicioni locum, fuit primum ipsius
                  pudore, deinde etiam patris diligentia disciplinaque munita.
                  Qui ut huic virilem togam deditšnihil dicam hoc loco de me;
                  tantum sit, quantum vos existimatis; hoc dicam, hunc a patre
                  continuo ad me esse deductum; nemo hunc M. Caelium in illo
                  aetatis flore vidit nisi aut cum patre aut mecum aut in M.
                  Crassi castissima domo, cum artibus honestissimis erudiretur.
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria
                  documentis frequentibus scirent, tramitibus deviis petivere
                  Pamphyliam diu quidem intactam sed timore populationum et
                  caedium, milite per omnia diffuso propinqua, magnis undique
                  praesidiis conmunitam. Eodem tempore etiam Hymetii praeclarae
                  indolis viri negotium est actitatum, cuius hunc novimus esse
                  textum. cum Africam pro consule regeret Carthaginiensibus
                  victus inopia iam lassatis, ex horreis Romano populo
                  destinatis frumentum dedit, pauloque postea cum provenisset
                  segetum copia, integre sine ulla restituit mora. Sed laeditur
                  hic coetuum magnificus splendor levitate paucorum incondita,
                  ubi nati sunt non reputantium, sed tamquam indulta licentia
                  vitiis ad errores lapsorum ac lasciviam. ut enim Simonides
                  lyricus docet, beate perfecta ratione vieturo ante alia
                  patriam esse convenit gloriosam.
                </section>
                <div className="bg-yellowClaire w-full h-1"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
