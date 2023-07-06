import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import FormSection from "./FormSection";

function Home(props) {
  const { selectHome } = props;
  const formSectionRef = useRef(null);

  useEffect(() => {
    selectHome();
  }, [selectHome]);

  return (
    <Fragment>
      <HeadSection selectFormSection={() => formSectionRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <div ref={formSectionRef} >
        <FormSection />
      </div>
      <FeatureSection />
      <PricingSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
