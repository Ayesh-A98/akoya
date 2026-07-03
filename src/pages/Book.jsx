import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebook } from "react-icons/fa";

// NOTE: Only stable IDs + prices live here. All display text (label, desc, etc.)
// now comes from the translation files via t("items.xxx") / t("services.xxx") / etc.
const SERVICES = [
  { id: "wash_iron", price: 6 },
  { id: "wash_iron_perf", price: 10 },
  { id: "dry_clean", price: 15 },
];

const CATEGORIES = [
  { id: "men", emoji: "🧑" },
  { id: "women", emoji: "👩" },
  { id: "other", emoji: "✨" },
];

const ITEMS = {
  men: [
    { id: "thobe", emoji: "👘" },
    { id: "bisht", emoji: "🧥" },
    { id: "suit", emoji: "🕴️" },
    { id: "ghutra", emoji: "🧣" },
    { id: "shirt", emoji: "👕" },
    { id: "tie", emoji: "👔" },
    { id: "tshirt", emoji: "👕" },
    { id: "vest", emoji: "🦺" },
    { id: "coat", emoji: "🧥" },
    { id: "pajamas", emoji: "🩲" },
    { id: "shorts", emoji: "🩳" },
    { id: "trousers", emoji: "👖" },
    { id: "kandura", emoji: "👘" },
    { id: "jubba", emoji: "🥋" },
  ],
  women: [
    { id: "abaya", emoji: "👗" },
    { id: "dress", emoji: "👗" },
    { id: "blouse", emoji: "👚" },
    { id: "skirt", emoji: "🩱" },
    { id: "jacket", emoji: "🧥" },
    { id: "scarf", emoji: "🧣" },
    { id: "shayla", emoji: "🧕" },
    { id: "jalabiya", emoji: "👗" },
    { id: "suit_w", emoji: "🕴️" },
    { id: "cardigan", emoji: "🧶" },
    { id: "trousers_w", emoji: "👖" },
    { id: "pajamas_w", emoji: "🩲" },
  ],
  other: [
    { id: "blanket", emoji: "🛏️" },
    { id: "curtain", emoji: "🏠" },
    { id: "bedsheet", emoji: "🛏️" },
    { id: "tablecloth", emoji: "🍽️" },
    { id: "pillow", emoji: "🛌" },
    { id: "duvet", emoji: "🛏️" },
    { id: "towel", emoji: "🏖️" },
    { id: "carpet", emoji: "🪨" },
  ],
};

const OUD_TYPES = [
  { id: "cambodian", price: 4, image: "/incense-1.webp" },
  { id: "bokhour", price: 4, image: "/incense-1.webp" },
];

const PACKAGING_OPTIONS = [
  { id: "plastic", price: 0 },
  { id: "premium", price: 10, colors: ["Gray", "Cream", "Black"] },
  { id: "giftbox", price: 4 },
];

export default function AkoyaBooking() {
  const { t, i18n } = useTranslation("translation9");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [garments, setGarments] = useState({});
  const [oudAnswer, setOudAnswer] = useState("no");
  const [oudType, setOudType] = useState(null);
  const [perfumeAnswer, setPerfumeAnswer] = useState("no");
  const [packaging, setPackaging] = useState({});
  const [giftAnswer, setGiftAnswer] = useState(null);
  const [friendName, setFriendName] = useState("");
  const [cardFrom, setCardFrom] = useState("");
  const [cardTo, setCardTo] = useState("");
  const [coupon, setCoupon] = useState("");

  const items = selectedCategory ? ITEMS[selectedCategory] : [];
  const groupLabel =
    selectedCategory === "men"
      ? t("labels.menGroup")
      : selectedCategory === "women"
      ? t("labels.womenGroup")
      : t("labels.otherGroup");
  const garmentList = Object.entries(garments);
  const hasAnyService = garmentList.length > 0;

  // ── PRICE CALCULATIONS (with console logging so you can trace every step) ──
  const oudPrice =
    oudAnswer === "yes" && oudType
      ? OUD_TYPES.find((o) => o.id === oudType)?.price ?? 0
      : 0;

  const packagingPrice = Object.values(packaging).reduce((s, p) => {
    const opt = PACKAGING_OPTIONS.find((o) => o.id === p.optionId);
    return s + (opt?.price ?? 0);
  }, 0);

  const garmentsPrice = garmentList.reduce((s, [, g]) => s + g.price * g.qty, 0);
  const totalPrice = garmentsPrice + oudPrice + packagingPrice;

  useEffect(() => {
    console.log("── PRICE CALCULATION ──────────────────────────");
    console.log("Garments:", garmentList.map(([id, g]) => ({
      id,
      label: t(`items.${id}`),
      service: t(`services.${g.serviceId}`),
      qty: g.qty,
      unitPrice: g.price,
      lineTotal: g.price * g.qty,
    })));
    console.log("Garments subtotal:", garmentsPrice, "QAR");
    console.log("Oud selected:", oudAnswer === "yes" ? oudType : "no", "-> +", oudPrice, "QAR");
    console.log("Packaging subtotal:", packagingPrice, "QAR", packaging);
    console.log(
      `TOTAL = garments(${garmentsPrice}) + oud(${oudPrice}) + packaging(${packagingPrice}) = ${totalPrice} QAR`
    );
    console.log("─────────────────────────────────────────────");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [garments, oudAnswer, oudType, packaging]);

  const handleCategory = (id) => {
    console.log("Category selected:", id);
    setSelectedCategory(id);
    setExpandedItem(null);
  };

  const handleServiceSelect = (item, svc) => {
    console.log(
      `Service selected -> item: ${item.id} (${t(`items.${item.id}`)}), service: ${svc.id} (${t(
        `services.${svc.id}`
      )}), price: ${svc.price} QAR`
    );
    setGarments((prev) => ({
      ...prev,
      [item.id]: {
        qty: prev[item.id]?.qty || 1,
        serviceId: svc.id,
        price: svc.price,
        emoji: item.emoji,
      },
    }));
  };

  const updateQty = (itemId, delta) => {
    setGarments((prev) => {
      const g = prev[itemId];
      const nq = (g?.qty || 1) + delta;
      console.log(`Qty change -> ${itemId}: ${g?.qty} -> ${nq}`);
      if (nq <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: { ...g, qty: nq } };
    });
  };

  const removeGarment = (itemId) => {
    console.log("Garment removed:", itemId);
    setGarments((prev) => {
      const { [itemId]: _, ...rest } = prev;
      return rest;
    });
  };

  const setPackagingFor = (itemId, optionId, color) => {
    console.log(`Packaging set -> item: ${itemId}, option: ${optionId}, color: ${color || "-"}`);
    setPackaging((prev) => ({
      ...prev,
      [itemId]: { optionId, colorChoice: color || prev[itemId]?.colorChoice },
    }));
  };

  const resetAll = () => {
    console.log("Reset all selections");
    setSelectedCategory(null);
    setExpandedItem(null);
    setGarments({});
    setOudAnswer("no");
    setOudType(null);
    setPerfumeAnswer("no");
    setPackaging({});
    setGiftAnswer(null);
  };

  const changeLanguage = (lng) => {
    console.log("Language changed to:", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b2e1a] via-[#7a6540] to-[#c8b98a] font-sans flex flex-col items-center py-4 sm:py-8 px-3 sm:px-4">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full mt-4 sm:mt-10 lg:mt-20 max-w-6xl items-stretch lg:items-start">

        {/* ── MAIN CARD ── */}
        <div className="flex-1 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden max-h-[80vh] sm:max-h-[85vh] lg:max-h-[92vh] min-w-0">

          {/* Header */}
          <div className="bg-[#3b2e1a] text-center py-4 sm:py-5 px-4 sm:px-8 border-b-2 border-[#b8973a] flex-shrink-0 relative">
            <div className="text-[#b8973a] font-bold text-base sm:text-lg tracking-widest uppercase">{t("app.title")}</div>
            <div className="text-gray-400 text-xs mt-1 tracking-wide">{t("app.step")}</div>

            {/* Language switcher */}
            <div className="absolute top-3 right-3 flex gap-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-1 text-xs rounded-md cursor-pointer ${
                  i18n.language === "en" ? "bg-[#b8973a] text-white" : "bg-transparent text-gray-400 border border-gray-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ur")}
                className={`px-2 py-1 text-xs rounded-md cursor-pointer ${
                  i18n.language === "ur" ? "bg-[#b8973a] text-white" : "bg-transparent text-gray-400 border border-gray-600"
                }`}
              >
                اردو
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-4 sm:p-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {/* Category */}
            <p className="text-sm text-gray-600 font-medium mb-3 sm:mb-4">{t("labels.chooseServiceType")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
              {CATEGORIES.map(cat => (
                <div key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={`flex flex-col items-center gap-2 sm:gap-2 py-8 sm:py-5 px-2 rounded-2xl sm:rounded-xl border cursor-pointer transition-all
                    ${selectedCategory === cat.id ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                  <span className="text-4xl sm:text-3xl">{cat.emoji}</span>
                  <span className="text-base sm:text-sm font-medium text-gray-800 text-center">{t(`categories.${cat.id}`)}</span>
                </div>
              ))}
            </div>

            {/* Items */}
            {selectedCategory && (
              <>
                <hr className="border-amber-100 my-4 sm:my-5" />
                <p className="text-sm text-gray-600 font-medium mb-3">{t("labels.selectItemThenService")}</p>
                <p className="text-base font-bold text-gray-700 mb-3">{groupLabel}</p>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                  {items.map(item => {
                    const g = garments[item.id];
                    const expanded = expandedItem === item.id;
                    return (
                      <div key={item.id}
                        className={`rounded-xl border overflow-hidden transition-all cursor-pointer
                          ${expanded ? "border-[#b8973a] border-2 bg-amber-50" : g ? "border-[#b8973a] bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                        <div className="flex items-center justify-between px-3 sm:px-4 py-3"
                          onClick={() => setExpandedItem(expanded ? null : item.id)}>
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-xl flex-shrink-0">{item.emoji}</span>
                            <span className="text-sm font-medium text-gray-800 truncate">{t(`items.${item.id}`)}</span>
                          </div>
                          {g && <span className="text-xs font-bold text-[#b8973a] flex-shrink-0 ml-2">✓{g.qty}</span>}
                        </div>
                        {expanded && (
                          <div className="border-t border-amber-100 px-3 sm:px-4 py-3">
                            <p className="text-xs text-gray-400 mb-2">{t("labels.chooseServiceForItem")}</p>
                            <div className="flex flex-wrap gap-2">
                              {SERVICES.map(svc => (
                                <button key={svc.id}
                                  onClick={e => { e.stopPropagation(); handleServiceSelect(item, svc); }}
                                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer
                                    ${g?.serviceId === svc.id ? "bg-[#b8973a] text-white border-none" : "border border-gray-300 text-gray-600 bg-white hover:bg-gray-50"}`}>
                                  {t(`services.${svc.id}`)}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* ── ADD-ONS ── */}
            {hasAnyService && (
              <>
                <hr className="border-amber-100 my-4 sm:my-5" />

                {/* Oud */}
                <p className="text-sm font-semibold text-gray-800 mb-3">{t("labels.oudQuestion")}</p>
                <div className="flex gap-3 mb-5">
                  <button onClick={() => setOudAnswer("yes")}
                    className={`flex-1 py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${oudAnswer === "yes" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("labels.yes")}</button>
                  <button onClick={() => { setOudAnswer("no"); setOudType(null); }}
                    className={`flex-1 py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${oudAnswer === "no" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("labels.no")}</button>
                </div>

                {oudAnswer === "yes" && (
                  <>
                    <p className="text-sm font-semibold text-gray-700 mb-3">{t("labels.chooseOudType")}</p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-5">
                      {OUD_TYPES.map(o => (
                        <div key={o.id} onClick={() => setOudType(o.id)}
                          className={`flex-1 rounded-xl border overflow-hidden cursor-pointer text-center transition-all
                            ${oudType === o.id ? "border-[#b8973a] border-2 " : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                          <div className="w-full h-32 sm:h-36 bg-amber-50 flex items-center justify-center overflow-hidden">
                            <img src={o.image} alt={t(`oudTypes.${o.id}.label`)} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3">
                            <p className="font-bold text-sm mb-1">{t(`oudTypes.${o.id}.label`)}</p>
                            <p className="text-xs text-gray-400">{t(`oudTypes.${o.id}.desc`)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Perfume */}
                <p className="text-sm font-semibold text-gray-800 mb-3">{t("labels.perfumeQuestion")}</p>
                <div className="flex gap-3 mb-5">
                  <button onClick={() => setPerfumeAnswer("yes")}
                    className={`flex-1 py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${perfumeAnswer === "yes" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("labels.yes")}</button>
                  <button onClick={() => setPerfumeAnswer("no")}
                    className={`flex-1 py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${perfumeAnswer === "no" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("labels.no")}</button>
                </div>

                {/* Packaging */}
                <p className="text-sm font-semibold text-gray-800 mb-1">{t("labels.packagingQuestion")}</p>
                <p className="text-xs text-gray-400 mb-4">{t("labels.packagingSub")}</p>

                {garmentList.map(([itemId, g]) => {
                  const pkg = packaging[itemId];
                  return (
                    <div key={itemId} className="border border-gray-200 rounded-xl p-3 sm:p-4 mb-3">
                      <div className="flex justify-between mb-3 gap-2">
                        <span className="text-sm font-bold text-gray-800">{t(`items.${itemId}`)} #1</span>
                        <span className="text-xs text-gray-400 flex-shrink-0">{t("labels.selectPackaging")}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        {PACKAGING_OPTIONS.map(opt => (
                          <div key={opt.id} onClick={() => setPackagingFor(itemId, opt.id, null)}
                            className={`flex-1 rounded-xl border p-3 cursor-pointer transition-all
                              ${pkg?.optionId === opt.id ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                            <p className="font-bold text-sm mb-1">{t(`packaging.${opt.id}.label`)}</p>
                            {opt.colors && (
                              <div className="flex gap-1 flex-wrap mb-2">
                                {opt.colors.map(c => (
                                  <span key={c}
                                    onClick={e => { e.stopPropagation(); setPackagingFor(itemId, opt.id, c); }}
                                    className={`px-2 py-0.5 rounded-full text-xs cursor-pointer border transition-all
                                      ${pkg?.optionId === opt.id && pkg?.colorChoice === c ? "border-[#b8973a] border-2 bg-amber-50 font-semibold" : "border-gray-300"}`}>
                                    {t(`packaging.colors.${c}`)}
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-xs text-gray-400">{t(`packaging.${opt.id}.sub`)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Gift */}
                <p className="text-sm font-semibold text-gray-800 mb-3">{t("labels.giftQuestion")}</p>
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <div onClick={() => setGiftAnswer("yes")}
                    className={`flex-1 flex flex-row sm:flex-col items-center gap-3 sm:gap-2 py-3 sm:py-5 px-3 rounded-xl border cursor-pointer transition-all text-left sm:text-center
                      ${giftAnswer === "yes" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                    <span className="text-3xl sm:text-4xl">🎁</span>
                    <div>
                      <span className="font-bold text-sm block">{t("labels.giftYesTitle")}</span>
                      <span className="text-xs text-gray-400">{t("labels.giftYesSub")}</span>
                    </div>
                  </div>
                  <div onClick={() => setGiftAnswer("no")}
                    className={`flex-1 flex flex-row sm:flex-col items-center gap-3 sm:gap-2 py-3 sm:py-5 px-3 rounded-xl border cursor-pointer transition-all text-left sm:text-center
                      ${giftAnswer === "no" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                    <span className="text-3xl sm:text-4xl">📦</span>
                    <div>
                      <span className="font-bold text-sm block">{t("labels.giftNoTitle")}</span>
                      <span className="text-xs text-gray-400">{t("labels.giftNoSub")}</span>
                    </div>
                  </div>
                </div>

                {giftAnswer === "yes" && (
                  <>
                    <div className="mb-4">
                      <p className="text-xs text-red-500 mb-1">* {t("labels.friendName")}</p>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b8973a]"
                        placeholder={t("labels.friendNamePlaceholder")} value={friendName} onChange={e => setFriendName(e.target.value)} />
                      {!friendName && <p className="text-xs text-red-500 mt-1">{t("labels.requiredField")}</p>}
                    </div>
                    <div className="border-t border-amber-100 pt-4">
                      <p className="text-sm font-bold mb-3">❤️ {t("labels.personalizedCard")}</p>
                      <p className="text-xs text-gray-600 mb-1">{t("labels.from")} <span className="text-red-500">*</span></p>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b8973a] mb-1"
                        placeholder={t("labels.fromPlaceholder")} value={cardFrom} onChange={e => setCardFrom(e.target.value)} />
                      {!cardFrom && <p className="text-xs text-red-500 mb-3">{t("labels.requiredField")}</p>}
                      <p className="text-xs text-gray-600 mb-1 mt-3">{t("labels.to")}</p>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b8973a]"
                        placeholder={t("labels.toPlaceholder")} value={cardTo} onChange={e => setCardTo(e.target.value)} />
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Footer note */}
          <div className="text-center text-gray-300 text-xs py-4 px-4 flex-shrink-0">
            {t("app.footerNote")}
          </div>
        </div>

        {/* ── ORDER SUMMARY ── */}
        <div className="w-full lg:w-72 bg-white rounded-xl shadow-xl p-4 sm:p-5 flex-shrink-0 lg:sticky lg:top-8 max-h-[80vh] sm:max-h-[85vh] lg:max-h-[92vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
            <span>🗒️</span> {t("summary.title")}
          </div>

          {/* Service Type row */}
          <div className="flex justify-between items-center text-xs text-gray-500 border-b border-amber-100 pb-3 mb-3">
            <span>{t("summary.serviceType")}</span>
            <span className="flex items-center gap-1 font-medium text-gray-700">
              {selectedCategory ? CATEGORIES.find(c => c.id === selectedCategory)?.emoji : ""}
              {" "}{selectedCategory ? t(`categories.${selectedCategory}`) : "—"}
              {selectedCategory && (
                <span onClick={resetAll} className="text-red-500 cursor-pointer font-bold text-sm ml-1">×</span>
              )}
            </span>
          </div>

          {/* Garments */}
          {garmentList.length > 0 && (
            <>
              <p className="text-xs font-bold text-gray-700 mb-2">{t("summary.garments")}</p>
              <div className={giftAnswer === null ? "max-h-[320px] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : ""}>
                {garmentList.map(([itemId, g]) => (
                  <div key={itemId} className="border-b border-amber-100 pb-3 mb-3">
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-800 mb-2">
                      <span>{g.emoji} {t(`items.${itemId}`)}</span>
                      <span onClick={() => removeGarment(itemId)} className="text-red-500 cursor-pointer font-bold text-sm">×</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(itemId, -1)}
                          className="w-6 h-6 border border-gray-300 rounded-md bg-white text-gray-600 text-base font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50">−</button>
                        <span className="text-sm font-semibold">{g.qty}</span>
                        <button onClick={() => updateQty(itemId, 1)}
                          className="w-6 h-6 border border-gray-300 rounded-md bg-white text-gray-600 text-base font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50">+</button>
                      </div>
                      <span className="text-xs font-bold text-[#b8973a]">{g.price * g.qty} {t("summary.currency")}</span>
                    </div>
                  </div>
                ))}

                {oudAnswer === "yes" && oudType && (
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                    <span>{t("summary.incense")}</span>
                    <span className="text-[#b8973a] font-bold">
                      +{oudPrice} {t("summary.currency")}
                      <span onClick={() => { setOudAnswer("no"); setOudType(null); }} className="text-red-500 cursor-pointer font-bold ml-1">×</span>
                    </span>
                  </div>
                )}

                <div className="border-t border-amber-100 pt-3 mt-1 mb-3">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>{t("summary.packagingLabel")}</span>
                    <span className="text-[#b8973a]">+{packagingPrice} {t("summary.currency")}</span>
                  </div>
                  {Object.entries(packaging).map(([iid, p]) => {
                    const opt = PACKAGING_OPTIONS.find(o => o.id === p.optionId);
                    const gm = garments[iid];
                    return opt && gm ? (
                      <div key={iid} className="flex justify-between text-xs text-gray-400">
                        <span>{t(`packaging.${opt.id}.label`)} × {gm.qty}</span>
                        <span>+{opt.price * gm.qty} {t("summary.currency")}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="flex gap-2 my-3">
                <input className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#b8973a]"
                  placeholder={t("summary.couponPlaceholder")} value={coupon} onChange={e => setCoupon(e.target.value)} />
                <button className="bg-[#b8973a] text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer hover:bg-[#a0822f]">
                  {t("summary.applyCoupon")}
                </button>
              </div>

              {giftAnswer !== null && (
                <div className="text-xs text-gray-600 mt-2 space-y-1">
                  {friendName && (
                    <>
                      <p>🎁 {t("summary.sendToFriend")}</p>
                      <p>{t("summary.friendNameLine")}: {friendName}</p>
                    </>
                  )}

                  {cardFrom && (
                    <p className="font-medium text-gray-700 mt-2">💌 {t("summary.personalizedCardTitle")}</p>
                  )}

                  {cardFrom && <p>{t("summary.fromLine")}: {cardFrom}</p>}

                  {cardTo && <p>{t("summary.toLine")}: {cardTo}</p>}
                </div>
              )}
            </>
          )}

          <div className="flex justify-between font-bold text-base text-gray-800">
            <span>{t("summary.finalPrice")}</span>
            <span className="text-[#b8973a]">{totalPrice} {t("summary.currency")}</span>
          </div>

          {garmentList.length > 0 && (
            <button className="w-full bg-[#b8973a] text-white font-bold text-sm py-3 rounded-xl mt-4 cursor-pointer hover:bg-[#a0822f] tracking-wide">
              {t("summary.bookNow")}
            </button>
          )}
        </div>

      </div>

      {/* ── FOOTER ── */}
      <div className="w-full bg-[#1C1C1C] text-gray-300 mt-16 sm:mt-24 lg:mt-50 pt-10 sm:pt-16 lg:pt-20 pb-10 px-4 sm:px-6">

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Column 1 - Logo + About */}
          <div>
            <img
              src="/companylogo.png"
              alt="Akoya Logo"
              className="w-32 sm:w-40 mb-6"
            />

            <p className="leading-relaxed text-white">
              {t("footer.aboutText")}
            </p>

            <div className="flex gap-4 mt-6 text-xl text-gray-400">
              <span className="hover:text-[#D4AF37] cursor-pointer"><BsTwitterX /></span>
              <span className="hover:text-[#D4AF37] cursor-pointer"><FaInstagram /></span>
              <span className="hover:text-[#D4AF37] cursor-pointer"><FaFacebook /></span>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              {t("footer.servicesTitle")}
            </h3>

            <ul className="space-y-4">
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› {t("footer.service1")}</li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› {t("footer.service2")}</li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› {t("footer.service3")}</li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› {t("footer.service4")}</li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› {t("footer.service5")}</li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› {t("footer.service6")}</li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              {t("footer.contactTitle")}
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>{t("footer.area")}</p>
              <p>{t("footer.zone")}</p>
              <p>{t("footer.street")}</p>
              <p>{t("footer.building")}</p>

              <p className="mt-4">+97433689955</p>
              <p>+97433689996</p>

              <p className="mt-4 break-words">info@akoyaluxurylaundry.com</p>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              {t("footer.newsletterTitle")}
            </h3>

            <p className="text-gray-400 mb-6">
              {t("footer.newsletterText")}
            </p>

            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />

            <button
              onClick={() => { window.scrollTo(0, 0); }}
              className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-md hover:bg-[#c9a52e] transition">
              {t("footer.subscribe")}
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-gray-500 text-sm text-center md:text-left">

          <p>{t("footer.copyright")}</p>

          <div className="flex gap-6">
            <span className="hover:text-[#D4AF37] cursor-pointer">{t("footer.privacy")}</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">{t("footer.terms")}</span>
          </div>

        </div>
      </div>

    </div>
  );
}