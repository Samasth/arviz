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
    
      
      
    
      var element = document.getElementById("c1b82432-3633-40a3-8aaa-85630f171efd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1b82432-3633-40a3-8aaa-85630f171efd' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;672916c8-328a-4037-b983-037c6f5519a3&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67533&quot;}},&quot;id&quot;:&quot;67537&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67499&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67482&quot;},0,0]]},&quot;id&quot;:&quot;67555&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67543&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67496&quot;}},&quot;id&quot;:&quot;67495&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67485&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67499&quot;},{&quot;id&quot;:&quot;67500&quot;},{&quot;id&quot;:&quot;67501&quot;},{&quot;id&quot;:&quot;67502&quot;},{&quot;id&quot;:&quot;67503&quot;},{&quot;id&quot;:&quot;67504&quot;},{&quot;id&quot;:&quot;67505&quot;},{&quot;id&quot;:&quot;67506&quot;}]},&quot;id&quot;:&quot;67509&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67546&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67550&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67551&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67487&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67543&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67483&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67541&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67492&quot;}},&quot;id&quot;:&quot;67491&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67489&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67556&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67557&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67519&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67506&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67547&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;CHJafpjyzD9D5rOdr2rNP35aDb3G4s0/uc5m3N1azj/0QsD79NLOPy+3GRsMS88/aitzOiPDzz/ST+YsnR3QP/AJk7yoWdA/DcQ/TLSV0D8rfuzbv9HQP0g4mWvLDdE/ZvJF+9ZJ0T+DrPKK4oXRP6BmnxruwdE/viBMqvn90T/b2vg5BTrSP/mUpckQdtI/Fk9SWRyy0j80Cf/oJ+7SP1HDq3gzKtM/b31YCD9m0z+MNwWYSqLTP6rxsSdW3tM/x6tet2Ea1D/kZQtHbVbUPwIguNZ4ktQ/INpkZoTO1D89lBH2jwrVP1pOvoWbRtU/eAhrFaeC1T+Vwhelsr7VP7N8xDS++tU/0DZxxMk21j/u8B1U1XLWPwuryuPgrtY/KGV3c+zq1j9GHyQD+CbXP2TZ0JIDY9c/gZN9Ig+f1z+eTSqyGtvXP7wH10EmF9g/2sGD0TFT2D/3ezBhPY/YPxQ23fBIy9g/MvCJgFQH2T9PqjYQYEPZP2xk459rf9k/ih6QL3e72T+o2Dy/gvfZP8WS6U6OM9o/4kyW3plv2j8AB0NupavaPx7B7/2w59o/O3ucjbwj2z9YNUkdyF/bP3bv9azTm9s/lKmiPN/X2z+wY0/M6hPcP84d/Fv2T9w/7Neo6wGM3D8JklV7DcjcPyZMAgsZBN0/RAavmiRA3T9iwFsqMHzdP396CLo7uN0/nDS1SUf03T+67mHZUjDeP9ioDmlebN4/9WK7+Gmo3j8SHWiIdeTePzDXFBiBIN8/TZHBp4xc3z9rS243mJjfP4gFG8ej1N8/099jq1cI4D/iPDpzXSbgP/CZEDtjROA///bmAmli4D8OVL3KboDgPxyxk5J0nuA/Kw5qWnq84D8rDmpaerzgPysOalp6vOA/HLGTknSe4D8OVL3KboDgP//25gJpYuA/8JkQO2NE4D/iPDpzXSbgP9PfY6tXCOA/iAUbx6PU3z9rS243mJjfP02RwaeMXN8/MNcUGIEg3z8SHWiIdeTeP/Viu/hpqN4/2KgOaV5s3j+67mHZUjDeP5w0tUlH9N0/f3oIuju43T9iwFsqMHzdP0QGr5okQN0/JkwCCxkE3T8JklV7DcjcP+zXqOsBjNw/zh38W/ZP3D+wY0/M6hPcP5Spojzf19s/du/1rNOb2z9YNUkdyF/bPzt7nI28I9s/HsHv/bDn2j8AB0NupavaP+JMlt6Zb9o/xZLpTo4z2j+o2Dy/gvfZP4oekC93u9k/bGTjn2t/2T9PqjYQYEPZPzLwiYBUB9k/FDbd8EjL2D/3ezBhPY/YP9rBg9ExU9g/vAfXQSYX2D+eTSqyGtvXP4GTfSIPn9c/ZNnQkgNj1z9GHyQD+CbXPyhld3Ps6tY/C6vK4+Cu1j/u8B1U1XLWP9A2ccTJNtY/s3zENL761T+Vwhelsr7VP3gIaxWngtU/Wk6+hZtG1T89lBH2jwrVPyDaZGaEztQ/AiC41niS1D/kZQtHbVbUP8erXrdhGtQ/qvGxJ1be0z+MNwWYSqLTP299WAg/ZtM/UcOreDMq0z80Cf/oJ+7SPxZPUlkcstI/+ZSlyRB20j/b2vg5BTrSP74gTKr5/dE/oGafGu7B0T+DrPKK4oXRP2byRfvWSdE/SDiZa8sN0T8rfuzbv9HQPw3EP0y0ldA/8AmTvKhZ0D/ST+YsnR3QP2orczojw88/L7cZGwxLzz/0QsD79NLOP7nOZtzdWs4/floNvcbizT9D5rOdr2rNPwhyWn6Y8sw/CHJafpjyzD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[166]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuvFFxfNEAQC68UXF80QBAEnvH1OiYAEADc+J67V4AQAVlILfIJABAAqvnUgjS/z/n8kMShFf/P8YW0Aap2/4/jOMii5Vh/j+EvBRDUuP9P6y8BDzKYP0/Mti3wuHb/D9IaiA4K1T8P02FXtfIyvs/gui7Gi49+z9WafrKaqv6P3ill7EmFfo/WtatKJR3+T/qjV6Na9X4P03JBDvuL/g/zpZIWCqF9z/4fGHdI9D2P/FvJgciFvY/zkVzsnBa9T+PHCDdNpX0P9gNIW3MyvM/1DkKa8T68j8+8fGPkSjyP5S3BDhdVfE/EoOBf0aA8D8WbIHqgVvvPwpoKie2ve0/nEHeeEst7D8N/6KfBanqPxrO6mBfNek/63xq+n7X5z9W6alvWY7mPwS7ckbCXOU/nNmo9Ro/5D/cPRBBdjzjP89Habm1VOI/4pRxSmyA4T84Yw0cA73gP94W6PxbDOA/+42cqDTV3j/J1a1yAa/dPwAXE2Pqndw/u0AfVG6g2z9L3AEPRbXaP4achiRQ3Nk/bVDeqrcM2T/kXqk2uU3YP9wXVXCpmtc/4PHBu9Tl1j+sx29z+jfWP8Psx08Yj9U/LFvaw/Dn1D9SHodCmD7UP6D2TnV/mNM/PCcs3Wvo0j9FhWNVfDjSP+QQCfEIfdE/Yt18Vay80D9rPAlLceXPP2z0KoLJVM4/SlkHkg2szD/RFDjTFxHLP2b/qRthesk/dtsWxbfxxz8kJExuLXLGPw6hTHl9FcU/01PCuwjRwz9LMGyY46rCP/Hy3jgot8E/j/xOJt3qwD9+GH3PUzzAP85T8z+gb78/YRyeI7mkvj+QJVIeEfu9P0SKxATxhb0/H/TMVudJvT9RIDVbEie9P7+qL1kfGr0/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[166]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67547&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67546&quot;}},&quot;id&quot;:&quot;67518&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67520&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67557&quot;},{&quot;id&quot;:&quot;67555&quot;}]},&quot;id&quot;:&quot;67558&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67491&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67494&quot;},{&quot;id&quot;:&quot;67498&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67495&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67521&quot;},{&quot;id&quot;:&quot;67526&quot;},{&quot;id&quot;:&quot;67531&quot;},{&quot;id&quot;:&quot;67536&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67538&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67509&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67483&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67487&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67485&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67489&quot;}},&quot;id&quot;:&quot;67482&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67552&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67553&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;OmtAIoDa4D9IyBbqhfjgP1gl7bGLFuE/ZoLDeZE04T9135lBl1LhP4Q8cAmdcOE/kplG0aKO4T+h9hyZqKzhP7BT82CuyuE/vrDJKLTo4T/NDaDwuQbiP9xqdri/JOI/6sdMgMVC4j/6JCNIy2DiPwiC+Q/RfuI/F9/P19ac4j8mPKaf3LriPzSZfGfi2OI/Q/ZSL+j24j9SUyn37RTjP2Cw/77zMuM/bw3WhvlQ4z9+aqxO/27jP4zHghYFjeM/nCRZ3gqr4z+qgS+mEMnjP7neBW4W5+M/ud4Fbhbn4z+53gVuFufjP6qBL6YQyeM/nCRZ3gqr4z+Mx4IWBY3jP35qrE7/buM/bw3WhvlQ4z9gsP++8zLjP1JTKfftFOM/Q/ZSL+j24j80mXxn4tjiPyY8pp/cuuI/F9/P19ac4j8IgvkP0X7iP/okI0jLYOI/6sdMgMVC4j/cana4vyTiP80NoPC5BuI/vrDJKLTo4T+wU/NgrsrhP6H2HJmorOE/kplG0aKO4T+EPHAJnXDhP3XfmUGXUuE/ZoLDeZE04T9YJe2xixbhP0jIFuqF+OA/OmtAIoDa4D86a0AigNrgPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuB0I3czoBkC4HQjdzOgGQEABnXZYuQZAuUJXi1KLBkBP1VpfiF0GQDrPfMmPMAZAlQukU18BBkAWdKBVSNQFQC/y5+NOpAVAopd8pDlyBUCUCmbR6T0FQNChI1h6BQVAqrP7EKbJBEAxFhhqookEQGvGuVjeRwRAFVPZ7EgEBECms6vn4L8DQBJ3CZnjewNAAHIW6fo2A0C0c/OaqPICQENtcksisAJAMkx0WKVvAkCZAhTF4zACQIBJizvr8wFAlQ2RBgK4AUClFR05fH0BQLVz7ui7QwFAuuhujwgKAUAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67549&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67548&quot;}},&quot;id&quot;:&quot;67523&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67491&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67494&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67524&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67518&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67519&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67520&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67522&quot;}},&quot;id&quot;:&quot;67521&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67518&quot;}},&quot;id&quot;:&quot;67522&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;yDvcNRwF5D/WmLL9ISPkP+X1iMUnQeQ/9FJfjS1f5D8CsDVVM33kPxINDB05m+Q/IGri5D655D8ux7isRNfkPz4kj3RK9eQ/TIFlPFAT5T9b3jsEVjHlP2o7EsxbT+U/eJjok2Ft5T+H9b5bZ4vlP5ZSlSNtqeU/pK9r63LH5T+0DEKzeOXlP8JpGHt+A+Y/0cbuQoQh5j/gI8UKij/mP+6Am9KPXeY//d1xmpV75j8MO0him5nmPxqYHiqht+Y/GpgeKqG35j8amB4qobfmPww7SGKbmeY//d1xmpV75j/ugJvSj13mP+AjxQqKP+Y/0cbuQoQh5j/CaRh7fgPmP7QMQrN45eU/pK9r63LH5T+WUpUjbanlP4f1vltni+U/eJjok2Ft5T9qOxLMW0/lP1veOwRWMeU/TIFlPFAT5T8+JI90SvXkPy7HuKxE1+Q/IGri5D655D8SDQwdOZvkPwKwNVUzfeQ/9FJfjS1f5D/l9YjFJ0HkP9aYsv0hI+Q/yDvcNRwF5D/IO9w1HAXkPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[50]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANFdEE3wXBEA0V0QTfBcEQMztJ5cwewRAijyqOSHdBEB/sBPI4T0FQFjrZCzOmwVABcIgmnD3BUCX/ge7mFAGQAsm5us7pQZAL3tmOz70BkD7aGE4qjkHQKrpul8FdwdAwnGd+KSsB0CVu5Ig+NUHQOl20Sz+9QdAPAkJMzoICEALj+VDoA8IQHyY8GfiCghAUTbZRtn7B0CoK7t0AOUHQEZQtyBxxgdALS8h3HSfB0BEEtbia3MHQGpMBmmzRgdAsk+NFuUYB0AAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[50]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67551&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67550&quot;}},&quot;id&quot;:&quot;67528&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67507&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67525&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67530&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67504&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67541&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67523&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67524&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67525&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67527&quot;}},&quot;id&quot;:&quot;67526&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67492&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67505&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67523&quot;}},&quot;id&quot;:&quot;67527&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67502&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67529&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67508&quot;}},&quot;id&quot;:&quot;67503&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;KfX08abV5j84Usu5rPPmP0avoYGyEec/Vgx4Sbgv5z9kaU4Rvk3nP3PGJNnDa+c/giP7oMmJ5z+QgNFoz6fnP5/dpzDVxec/rjp++Nrj5z+8l1TA4AHoP8v0KojmH+g/2lEBUOw96D/prtcX8lvoP/cLrt/3eeg/BmmEp/2X6D8VxlpvA7boPyQjMTcJ1Og/MoAH/w7y6D9B3d3GFBDpP1A6tI4aLuk/XpeKViBM6T9t9GAeJmrpP3xRN+YriOk/i64NrjGm6T+ZC+R1N8TpP6houj094uk/t8WQBUMA6j/GImfNSB7qP9R/PZVOPOo/49wTXVRa6j/yOeokWnjqPwGXwOxfluo/D/SWtGW06j8eUW18a9LqPy2uQ0Rx8Oo/OwsaDHcO6z9KaPDTfCzrP1nFxpuCSus/aCKdY4ho6z92f3MrjobrP4XcSfOTpOs/lDkgu5nC6z+jlvaCn+DrP7HzzEql/us/wFCjEqsc7D/PrXnasDrsP90KUKK2WOw/7Gcmarx27D/7xPwxwpTsPwoi0/nHsuw/GH+pwc3Q7D8n3H+J0+7sPzY5VlHZDO0/RZYsGd8q7T9T8wLh5EjtP2JQ2ajqZu0/ca2vcPCE7T+ACoY49qLtP45nXAD8wO0/ncQyyAHf7T+sIQmQB/3tP7p+31cNG+4/ydu1HxM57j/YOIznGFfuP+eVYq8ede4/55Virx517j/nlWKvHnXuP9g4jOcYV+4/ydu1HxM57j+6ft9XDRvuP6whCZAH/e0/ncQyyAHf7T+OZ1wA/MDtP4AKhjj2ou0/ca2vcPCE7T9iUNmo6mbtP1PzAuHkSO0/RZYsGd8q7T82OVZR2QztPyfcf4nT7uw/GH+pwc3Q7D8KItP5x7LsP/vE/DHClOw/7Gcmarx27D/dClCitljsP8+tedqwOuw/wFCjEqsc7D+x88xKpf7rP6OW9oKf4Os/lDkgu5nC6z+F3Enzk6TrP3Z/cyuOhus/aCKdY4ho6z9ZxcabgkrrP0po8NN8LOs/OwsaDHcO6z8trkNEcfDqPx5RbXxr0uo/D/SWtGW06j8Bl8DsX5bqP/I56iRaeOo/49wTXVRa6j/Ufz2VTjzqP8YiZ81IHuo/t8WQBUMA6j+oaLo9PeLpP5kL5HU3xOk/i64NrjGm6T98UTfmK4jpP230YB4mauk/XpeKViBM6T9QOrSOGi7pP0Hd3cYUEOk/MoAH/w7y6D8kIzE3CdToPxXGWm8Dtug/BmmEp/2X6D/3C67f93noP+mu1xfyW+g/2lEBUOw96D/L9CqI5h/oP7yXVMDgAeg/rjp++Nrj5z+f3acw1cXnP5CA0WjPp+c/giP7oMmJ5z9zxiTZw2vnP2RpThG+Tec/Vgx4Sbgv5z9Gr6GBshHnPzhSy7ms8+Y/KfX08abV5j8p9fTxptXmPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[134]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWzVYL+3Wtj9bNVgv7da2P6X7WIlwMrc/6Z4vZ626tz+DSSxwGHa4P3BJdaGYkbk/67kuNO30uj97vViHjsy8P9sts3DrB78/JtvtDt7wwD8enVr0o5rCP8an4CeAisQ/3yePyJ7Cxj/NRvmYfjvJP2xU2XvpAMw/0296AXATzz+a+FSDxS/RP8eeNBQM/9I/ANDS7Qzu1D9GoWtcl+7WP1QuYy6BGdk/6fLBFv5Z2z+aMKJLUr7dP/k+2GukHeA/9/WCl5Fk4T8740JwabniP8Al8+WDGuQ/VLeU1deI5T+YEMy5bv7mP+V6W4r5d+g/hK4uWhn66T86GGJQT3zrPz0FQh6sAu0/ZbughPuG7j/lzPj+GATwP+UzMy9txPA/aDrgh7SB8T+J5irewTzyP3dx57+T9/I/r1EVIiyy8z+veOD4dmr0P10KI5+jIfU/9g1PsfLY9T/LIGVjGZL2P5ByryMWSfc/nUkLjAEE+D90t6SQer/4P9XKxikAgPk/J6hnJIg9+j/+caQn9/76P4q7R3Cvv/s/ZeXT5xx8/D/a4H6ATDj9P5Y6A7OQ8/0/F3NjN3mu/j/ODQYQwmj/P2ciHEv4DwBAq5cmATpsAEBqfCswxcYAQMeseYn/IQFA8da+2st9AUBhLSoKmNoBQD5W11ooOAJA1AdETiuWAkCA7R8tjfQCQLu6cz0LVQNACuB3ppS1A0AAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[134]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67553&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67552&quot;}},&quot;id&quot;:&quot;67533&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67548&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67535&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67496&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67549&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67528&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67529&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67530&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67532&quot;}},&quot;id&quot;:&quot;67531&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67500&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67528&quot;}},&quot;id&quot;:&quot;67532&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67495&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67498&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67508&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67534&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67509&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67499&quot;},{&quot;id&quot;:&quot;67500&quot;},{&quot;id&quot;:&quot;67501&quot;},{&quot;id&quot;:&quot;67502&quot;},{&quot;id&quot;:&quot;67503&quot;},{&quot;id&quot;:&quot;67504&quot;},{&quot;id&quot;:&quot;67505&quot;},{&quot;id&quot;:&quot;67506&quot;}]},&quot;id&quot;:&quot;67556&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67507&quot;}},&quot;id&quot;:&quot;67501&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67538&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67533&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67534&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67535&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67537&quot;}},&quot;id&quot;:&quot;67536&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;67558&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"672916c8-328a-4037-b983-037c6f5519a3","root_ids":["67558"],"roots":{"67558":"c1b82432-3633-40a3-8aaa-85630f171efd"}}];
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