!function(t,e){Drupal.behaviors.ibm_widgets={attach:()=>{!0===e.common.util.config.get("contentwidgets.enabled")&&function(){e.common.widget.setsameheight&&t("[data-widget=setsameheight]:not([data-init=false])").setsameheight();e.common.widget.dyntabs&&t("div[data-widget=dyntabs]:not([data-init=false])").dyntabs()}()}}}(jQuery,IBMCore),window.addEventListener("load",()=>{Drupal.behaviors.ibm_widgets.attach()});