$.getJSON(
  "https://api.coingecko.com/api/v3/coins/safemars?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
  function (data) {
    var value = data.market_data.current_price.usd;
    var volume = data.market_data.total_volume.usd;
    var oneh = data.market_data.price_change_percentage_1h_in_currency.usd;
    var fourh = data.market_data.price_change_percentage_24h_in_currency.usd;
    var sevend = data.market_data.price_change_percentage_14d_in_currency.usd;
    var marketcap = data.market_data.market_cap.usd;

    if (oneh >= 0) {
      $(".1hc").addClass("po");
    } else {
      $(".1hc").addClass("ne");
    }

    if (fourh >= 0) {
      $(".24hc").addClass("po");
    } else {
      $(".24hc").addClass("ne");
    }

    if (sevend >= 0) {
      $(".7dc").addClass("po");
    } else {
      $(".7dc").addClass("ne");
    }

    const valuef = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
      notation: "compact",
      minimumFractionDigits: 8,
    });

    const volumef = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
    });

    const marketf = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
      notation: "compact",
    });

    const changef = new Intl.NumberFormat("en", {
      style: "decimal",
      signDisplay: "never",
      useGrouping: true,
      maximumFractionDigits: 2,
    });

    $(".value").append(valuef.format(value));
    $(".volume").append(volumef.format(volume));
    $(".1hc").append(changef.format(oneh));
    $(".24hc").append(changef.format(fourh));
    $(".7dc").append(changef.format(sevend));
    $(".marketcap").append(marketf.format(marketcap));

    // console.log(data);
    // console.log(value);
    // console.log(volume);
    // console.log(oneh);
    // console.log(fourh);
    // console.log(sevend);
  }
);

$.getJSON(
  "https://jhslaw2k5e.execute-api.eu-west-1.amazonaws.com/stats",
  function (records) {
    var burned = records.total_burned;
    var hodlers = records.holders;
    var liquid = records.liquidity;

    const burnedf = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
      notation: "compact",
    });

    const hodlersf = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
    });

    const liquidf = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
      notation: "compact",
    });

    $(".burned").append(burnedf.format(burned));
    $(".hodlers").append(hodlersf.format(hodlers));
    $(".liquid").append(liquidf.format(liquid));

    // console.log(burned);
    console.log(records);
  }
);
