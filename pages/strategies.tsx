import type { NextPage } from "next";
import styles from "@/styles/Strategies.module.css";
import basic from "@/styles/Basic.module.css";
import StrategyTableItem from "@/components/StrategyTableItem";

const Strategies: NextPage = () => {
  return (
    <section className={styles.strategies}>
      <div className={basic.container}>
        <div className={styles.strategies__inner}>
          <p className={basic.h2}>Overview of all Everbloom strategies</p>

          <div className={styles.strategies__table_wrap}>
            <div className={styles.strategies__table}>
              <div className={styles.strategies__table_item}>
                <p className={basic.body2}>Name</p>
                <p className={basic.body2}>Average APY</p>
                <p className={basic.body2}>Risk</p>
                <p className={basic.body2}>Status</p>
                <p className={basic.body2}>Assets</p>
              </div>

              <StrategyTableItem
                name="Maker"
                apy="3,42%"
                active
                low
                link="/strategies/maker"
              />

              <StrategyTableItem
                name="FRAX 3crv"
                apy="3,42%"
                medium
                link="/strategies/frax"
              />

              <StrategyTableItem
                name="GMX Delta Neutral"
                apy="3,42%"
                active
                high
                link="/strategies/gmx"
              />

              <StrategyTableItem
                name="FRAX 3crv"
                apy="3,42%"
                active
                low
                link="/strategies/frax"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
