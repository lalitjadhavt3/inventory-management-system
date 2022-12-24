import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
function Scripts() {
  return (
    <>
      <HelmetProvider>
        <Helmet
        >
          <script src="../assets/js/jquery-3.5.1.min.js"></script>

          <script src="../assets/js/popper.min.js"></script>
          <script src="../assets/js/bootstrap.min.js"></script>

          <script src="../assets/plugins/swiper/js/swiper.min.js"></script>

          <script src="../assets/js/script.js"></script>
        </Helmet>
      </HelmetProvider>
    </>
  );
};
export default Scripts;