import dynamic from "next/dynamic";
import Image from "next/image";
import Risk from "@/components/Risk";
import styles from "@/styles/Strategies.module.css";
import basic from "@/styles/Basic.module.css";
import Info from "@/components/icons/Info";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  colors: ["#6072D8"],
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#46474B",
        fontFamily: "Proxima Nova, sans-serif",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    min: 10,
    max: 100,
    tickAmount: 3,
    labels: {
      style: {
        colors: "#46474B",
        fontFamily: "Proxima Nova, sans-serif",
        fontSize: "12px",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
};
const series = [
  {
    name: "Name series",
    data: [20, 23, 24, 40, 47, 56, 50, 52, 65, 78, 80, 99],
  },
];
const Strategies = () => {
  return (
    <section className={styles.strategies}>
      <div className={basic.container}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>
              <Image
                src="/img/bitcoin.svg"
                alt="Bitcoin"
                width={36}
                height={36}
              />
              <p className={basic.h1}>wBTC / GMX Delta Neutral</p>
              <p className={`${basic.h1} ${styles.subTitle}`}>strategy</p>
              <div className={styles.status}>
                <div className={`${styles.dot} ${styles.green}`}></div>
                <span className={styles.statusLabel}>
                  Active since 21 May 2022 15:34:66
                </span>
              </div>
            </div>
            <div className={styles.risk}>
              <Risk
                riskTitle="Strategy Risk"
                riskValue="Medium"
                vaultTitle="Strategy APY"
                vaultValue="4,56%"
                medium
              />
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.desc}>
              <p className={`${basic.h3} ${styles.aboutTitle}`}>
                About this Strategy
              </p>
              <p className={`${styles.descText} ${basic.body1}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen.
              </p>
              <br />
              <p className={`${styles.descText} ${basic.body1}`}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br />
              <p className={`${styles.descText} ${basic.body1}`}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className={styles.chart}>
                <p className={basic.body2}>Yield performance over time</p>

                <div className={styles.chartWrapper}>
                  <ApexCharts
                    options={options}
                    series={series}
                    type="area"
                    height="100%"
                  />
                </div>

                <a href="#" className={styles.learnMore}>
                  <Info width="24" height="24" />
                  Learn more about Everbloom strategies and risks on our blog.
                </a>
              </div>
            </div>
            <div className={styles.flowchart}>
              <p className={basic.h3}>About this Strategy</p>
              <Image
                src="/img/strategy-flowchart.svg"
                width={549}
                height={1377}
                alt="Flow Chart"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
