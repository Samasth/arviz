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
    
      
      
    
      var element = document.getElementById("f0ed7ac0-0f35-4267-8e4d-f3456c6d32f7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0ed7ac0-0f35-4267-8e4d-f3456c6d32f7' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;bf827f1f-17ea-4eac-ae2c-620dfb2affb7&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66564&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66527&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66535&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66538&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66567&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66568&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66569&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66571&quot;}},&quot;id&quot;:&quot;66570&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66539&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66542&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66562&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66563&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66564&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66566&quot;}},&quot;id&quot;:&quot;66565&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66577&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66540&quot;}},&quot;id&quot;:&quot;66539&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66562&quot;}},&quot;id&quot;:&quot;66566&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66540&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66551&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66575&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;uUkp15FpBcBTNp/eOhn+v4Qyg+Ukmf2/8UNkpzR6/b8qcVeA7l75v0TvHv2bePi/SeIAphpE+L/p7SIH4yj2v7H0qSIUbvW/VDZr6DMc9b84H8UCPIPzv8xJ2ZzStfK//Fn0+SKP8r+rfS/9movyv2DEdNFwBPK/D2Al5Nz08b8GWLjQ/+nxv4VPRcsQw/G/2DRjdkvq7b86FtDi7rftv6MWby50OO2/xgH9qCDu7L/i33jRItrsv5OI1bd4yOy/9DFVLmtP67+1woWjamfqv2uT1EweMee/goXi+zUO579a/SoAORHmv/I141Mui+W/IvmD6q0H479JQCBmTknivzILuzwuNN+/fZMfC6wR3b/+2RT9/SHcv0Oy6IeS79q/dod7PjWH2L8rRYm2w4nXvyIrlysm19S/RZF4M4K/1L/tXJgEOYTQv7DdXeRwG8y/0NZjGB3Gyb9TCtZpD0HJv1mtHmBuese/3WJccA0qxr/j/5XMF6vDv6QW4zDpWsO/coHpo1nEwr+BsS/J2om4vxsLYj33pLa/1qCN43Quq79AMGXg7MSlv9e1iC+7l4C//MK8GVTKjj8if6nOK0anP7k7B8yXk6c/NT6O3qg1rz8sTKNsxBa1P2+w3ywTjLo/o4iHBWiIvj+Zg0ah9v7CP4nwNUqoWMM/wwm1j0RdyT+eae4HulnKP2EyXkdGNNE/1TrhD8c70z9oZvBaJqnVP8AArLTxB9g/FwsB9vsN2T+6NDQK3CnfP9T9CC0SKt8/2TepTOTi4T9AeFGCdJniP1EBViXsTuM/pLasagv45D+an/y8TMflP0/jKM+d2OU/OwNVidHt5T87Jpm5YXrmP/XD+mkArOg/G93DSxCw6D/MzHnLrLHoP2pY+YYVw+g/IRrafBoh6j/EjZQFCdLqP/+uKN938es/i4yAHjcu7D9MG7xM4J3sP38+o4BF5O4/qR5Vka7B8D86rwy9T97wPwQ262zUVPI/dRJ7klCC8j8oZk+jNgf1P2lx4BSVLPU/BsS/+j/t9T/1sWWfy278P5bYFoJS3v0/Rw2PpD+zAkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;jmytUdws5T/WZLCQYvPwP75mPo1tM/E/CN5NrOVC8T9rR9S/iFDzP16IcAGyw/M/3I7/rPLd8z8MiW58juv0P6gFq+71SPU/1mTKC+Zx9T9kcJ3+YT72Pxpbk7EWpfY/AtMFg2649j8qQWiBMrr2P9CdRZfH/fY/+E/tjZEF9z/906MXAAv3Pz5YXZp3Hvc/yjJnIm2F+D9y+ktHBJL4P1c6ZPTisfg/jr/A1XfE+D8IyKFLd8n4P9udCtLhzfg/g7NqNCUs+T9Tjx5XJWb5PyXbymy4M/o/oF4HgXI8+j+qQPW/sXv6P4QyB2s0nfo/uAFfhRQ++z/u73dmrG37P5qeaDh6Gfw/kA2cfspd/D/AZF1AwHv8P7jpAq8Novw/EY8wWBnv/D9b1y6Jxw79P5wajTobZf0/1+2QuQ9o/T9i9GzfeO/9PyUiuvFIPv4/k8J5Lp5j/j9bn2IJ72v+PyoV/hlZiP4/0jn6KF+d/j8CoDaDTsX+P5bO8WxRyv4/6WfBZbrT/j90grYpsTv/P6fvFEbYSv8/fclxLEaT/z8/a35M7Kj/P0p30ERo7/8/Yd4MKmUPAED+Up1XjC4AQHcOmC8nLwBAfBy9UWs+AEAxjbIRW1QAQMJ+s0wwagBAIx4WoCF6AEAdNAq195cAQISvUULFmgBATqh9JOrKAEBNcz/QzdIAQCbjdWREEwFArRP+cLwzAUBmBq9lkloBQAzASht/gAFAsRBgv9+QAUBMQ6PAnfIBQN2P0CKh8gFA+yaViVw8AkAIL0qQLlMCQCrAqoTdaQJA1JZVbQGfAkDzk5+X6bgCQGoc5bkTuwJAZ6AqMbq9AkDHJDM3TM8CQH9YPw2AFQNAo3t4CQIWA0CaOW+ZNRYDQA0r37BiGANAREObTyNEA0C4kbIgQVoDQOAV5fsufgNAkRHQ48aFA0Bqg5cJvJMDQNBnFLCI3ANAqkdVpGswBEDOK0PvkzcEQIHNOhs1lQRAncSeJJSgBECK2dOozUEFQFocOEUlSwVAAvGv/k97BUB9bNnnshsHQCa2haCUdwdApIZH0p9ZCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66583&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66582&quot;}},&quot;id&quot;:&quot;66567&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66536&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66577&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66572&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66552&quot;}},&quot;id&quot;:&quot;66547&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66568&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66580&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66535&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66538&quot;},{&quot;id&quot;:&quot;66542&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66539&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66565&quot;},{&quot;id&quot;:&quot;66570&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66572&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66553&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66527&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66531&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66529&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66533&quot;}},&quot;id&quot;:&quot;66526&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66552&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66581&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66567&quot;}},&quot;id&quot;:&quot;66571&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66543&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66569&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66583&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66563&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66548&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66531&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66543&quot;},{&quot;id&quot;:&quot;66544&quot;},{&quot;id&quot;:&quot;66545&quot;},{&quot;id&quot;:&quot;66546&quot;},{&quot;id&quot;:&quot;66547&quot;},{&quot;id&quot;:&quot;66548&quot;},{&quot;id&quot;:&quot;66549&quot;},{&quot;id&quot;:&quot;66550&quot;}]},&quot;id&quot;:&quot;66553&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66533&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66546&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66529&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66575&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66536&quot;}},&quot;id&quot;:&quot;66535&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66551&quot;}},&quot;id&quot;:&quot;66545&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66544&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66582&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66549&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66550&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66581&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66580&quot;}},&quot;id&quot;:&quot;66562&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;}],&quot;root_ids&quot;:[&quot;66526&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"bf827f1f-17ea-4eac-ae2c-620dfb2affb7","root_ids":["66526"],"roots":{"66526":"f0ed7ac0-0f35-4267-8e4d-f3456c6d32f7"}}];
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