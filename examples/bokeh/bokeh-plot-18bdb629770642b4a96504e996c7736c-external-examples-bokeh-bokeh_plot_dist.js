(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("878ea5b7-553d-4b17-8658-d6eb85caba24");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '878ea5b7-553d-4b17-8658-d6eb85caba24' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;a3a7065c-68a2-43bc-84f9-40c0f427274d&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65097&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65049&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65128&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65063&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65113&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65061&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65120&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65068&quot;}},&quot;id&quot;:&quot;65067&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65044&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65122&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65089&quot;}},&quot;id&quot;:&quot;65093&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65097&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65037&quot;}},&quot;id&quot;:&quot;65036&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65050&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65094&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65104&quot;}]},&quot;id&quot;:&quot;65103&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65092&quot;}]},&quot;id&quot;:&quot;65104&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65081&quot;}},&quot;id&quot;:&quot;65077&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65106&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65028&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65102&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65127&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65030&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65081&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65078&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65107&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65090&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65036&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65039&quot;},{&quot;id&quot;:&quot;65043&quot;},{&quot;id&quot;:&quot;65103&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65040&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65092&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65094&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65051&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65028&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65032&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65030&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65034&quot;}},&quot;id&quot;:&quot;65027&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65034&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65032&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65040&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65043&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65075&quot;},{&quot;id&quot;:&quot;65076&quot;},{&quot;id&quot;:&quot;65077&quot;},{&quot;id&quot;:&quot;65078&quot;},{&quot;id&quot;:&quot;65079&quot;},{&quot;id&quot;:&quot;65080&quot;}]},&quot;id&quot;:&quot;65082&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65067&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65070&quot;},{&quot;id&quot;:&quot;65074&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65071&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65108&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65113&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65082&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65059&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65063&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65061&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65065&quot;}},&quot;id&quot;:&quot;65058&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65080&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65101&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65067&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65070&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65075&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65044&quot;},{&quot;id&quot;:&quot;65045&quot;},{&quot;id&quot;:&quot;65046&quot;},{&quot;id&quot;:&quot;65047&quot;},{&quot;id&quot;:&quot;65048&quot;},{&quot;id&quot;:&quot;65049&quot;}]},&quot;id&quot;:&quot;65051&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65072&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65089&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65090&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65091&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65093&quot;}},&quot;id&quot;:&quot;65092&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65048&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65105&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65106&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65107&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65109&quot;}},&quot;id&quot;:&quot;65108&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65091&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65027&quot;},{&quot;id&quot;:&quot;65058&quot;}]},&quot;id&quot;:&quot;65110&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65065&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65099&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65041&quot;}},&quot;id&quot;:&quot;65040&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65059&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65071&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65074&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65037&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65047&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65036&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65039&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65076&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65105&quot;}},&quot;id&quot;:&quot;65109&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65122&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65072&quot;}},&quot;id&quot;:&quot;65071&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65050&quot;}},&quot;id&quot;:&quot;65046&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65045&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65120&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65079&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;R1Oam1rLnD8jUC051cmcPwmHm81Ox5w/hWmDcIqunD9WuWSUD5icPxzQbZfYepw/SKUTI5VgnD/sbeyLtEmcP+5dbsdtRJw/PA+J+XtGnD+w30YEXmCcPzTOIHrNlZw/bzJmv77snD8sQpor8mydP5WZoSD4G54/K0h4T1b+nj/nSZjmhv6fP4gn4+JtoaA/yKR3j1NToT96SxluvhmiP+qm9t4o9qI/EHYKepLloz8xvC3zv9ykP/Tbstnw3KU/D46WAUvmpj8GZQC6kPKnP1P+RPcjA6k/VLllyAEbqj+plsj7PDKrP3FWP4vPS6w/5G3w38JmrT9MqX7ygI2uP1T3m/a9tK8/fgajFNt5sD+q4oGGqR+xP3mYxpAT1bE/KqjCrfWUsj8CuFxBN2SzP3g+B9MARLQ/WT/F2CY2tT+xgfDNwz62PxxJapYXWLc/uW2C7cqLuD9kVtkTZtS5P1AD3FKwO7s/L7Y6KBSzvD9GvGz2zUO+P8GXGQ8B578/lSWkIGHQwD/10PyM27fBP3B8rQroqsI/1LI6Flmnwz8uQ++QWrHEPxeg2so3xcU/vNAhJq/lxj9Rw1pxzg7IPyMnJtECQMk/XqGnmPJ3yj/XpVTc1LrLP/cMUgzI/cw/0B3B/tZAzj/bLCVr0YLPP4PdmkCgX9A/QSgn+u340D/Av13HOovRPw22oojxFdI/BqTfrYCV0j9FnFuzRgvTP/ZNVbLrdNM/dOMctJXQ0z8jL0mi/R3UP9jgnktdXtQ/OXfZmfSS1D+vOHNlFrrUP7cYFjVJ19Q/Rzd1e97q1D+tR2hcE/bUPxbe9f5D+9Q/ClHGYF/81D9cQ6na+PzUPxX0B0+h+9Q/uiO44lj81D/AC8lcv/3UPyPZvygIBNU/mxdp5qsM1T9RCucONhzVP1QS4RyNL9U/kSx3cIxG1T+OquMJK2HVP+gPKS+uftU/dACMyZie1T9Z+7ux3r3VP3E9FiNH39U/eKt/p3H+1T/HKmUPDx/WP1Hl4xCTP9Y/T0Q29/1f1j8XxOeYgoDWPxJjmrVFo9Y/QD++punF1j8tGbiPWOzWPyXNrOBOE9c/WN/tqwY81z9XyeEagWXXP1o5Wt/0jtc/U/10BTK21z/9LWNXo9jXP+LGGWFa89c/bSyEIXgH2D+SOiEiLxDYP6Eg9n3JCdg/0uoKU5n01z+tWElxTM/XP6s2Pqd+mtc/EmjNnl5V1z8O/maYggHXP9zI0v5doNY/Ga5ki7401j+cfkUomsDVP8Io6l6JRtU/mBstmt3I1D/Z5G3PGUnUP31BhCCgy9M/ccWnmnxP0z9uoTHqG9bSP5JHuDJjYdI/hwoacL7w0T/jrKEgXILRP63Qb6B6FNE/QB9XgUSo0D+rcKFz7zzQPzlV5edLoc8/29qGal3Bzj9VkZDm9d7NP7ZfuBAF8sw/gPYqCG8AzD/2jJ4XSAjLP3XPxihMCso//GUNWs8GyT8sxt0jnQDIP7pmmAIW+sY/5CCDVpDxxT+p/k0p4+3EP7q6SF6H7MM/u9ZW2sDuwj8i7H4r9ffBP4Ijk/JOBsE/bnGyU0MawD+NR0l8e26+P9WCOOiGsrw/DkpC+jgKuz8FDMISL3K5P+rXmkSc6rc/mtmhcoh3tj+6nqLcYRi1P1slu5VIzrM/RcV2O2CYsj/pyBOsZHaxP2RVAVmya7A/BY6NIAz4rj9DQ+GPVECtP4Fs6fo7tas/ZaMxZPtNqj/o4mTyew2pP5PZ4mvL66c/lxxSRZvhpj9fj+N2EOylP8U6VLIHDqU/ymJY50A5pD8xsJtxJmyjP9MWZtJwm6I/OVP3zePGoT/6k0Jn9/GgP0xoJl3zGqA/ZOzFKblsnj8oBy1cdJicP0GnC5Z0wJo/VKDup8LmmD/WlzKr4QOXPyq21QpXE5U/wzsNckMskz+4jYEZWliRPw01r6v+FY8/56K0n2q1iz/Huo3WxYWIP6Beo7/NooU/haKVWE77gj88eSgqDamAP1VJtrAfWX0/dYz3zZXzeT8iEt7EwSt3P5kXZ4f24XQ/t0A7EHM4cz+jwfi97v1xP94Cc8FcE3E/eI+eTHilcD8JGFo3rUBwP9WlUGUoH3A/nExJG28EcD8wCexFxhlwPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65128&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65127&quot;}},&quot;id&quot;:&quot;65105&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65068&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65041&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;O99PjZdukj+DwMqhRbazP+f7qfHSTcI/+n5qvHSTyD9GtvP91HjJP4/C9Shcj8I/8tJNYhBYuT+LbOf7qfGyP/yp8dJNYqA/ObTIdr6fij/6fmq8dJN4P/yp8dJNYlA//Knx0k1iUD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65102&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65101&quot;}},&quot;id&quot;:&quot;65089&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65099&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;65110&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"a3a7065c-68a2-43bc-84f9-40c0f427274d","root_ids":["65110"],"roots":{"65110":"878ea5b7-553d-4b17-8658-d6eb85caba24"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();