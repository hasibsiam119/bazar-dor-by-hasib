

const MarqueeCard = ({e}) => {
    const isUp = e.change.dir === "up";
    return (
        <div className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-4 py-2 text-sm whitespace-nowrap">
      {/* Icon */}
      <span>{e.categoryIcon}</span>

      {/* Product name */}
      <span className="font-medium text-gray-700">{e.nameBn}</span>

      {/* Price */}
      <span className="font-semibold text-gray-900">
        {e.today} টাকা/{e.unit === "kg" ? "কেজি" : e.unit}
      </span>

      {/* Price change */}
      <span
        className={`flex items-center gap-1 text-xs font-bold ${
          isUp ? "text-red-600" : "text-green-600"
        }`}
      >
        {isUp ? "▲" : "▼"}
        {e.change.pct.toLocaleString("bn-BD")}%
      </span>
    </div>
    );
};

export default MarqueeCard;