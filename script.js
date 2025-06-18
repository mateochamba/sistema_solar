$(document).ready(function () {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    // --- DBZ SYSTEM HTML ---
    var dbzSystem = `
        <div id='dbz-earth-system'>
            <div id='dbz-sun' class='orbit'>
                <div class='pos'>
                    <div class='planet' style='background: #ffe066; width: 7em; height: 7em;'></div>
                </div>
            </div>
            <div id='dbz-earth' class='orbit'>
                <div class='pos'>
                    <div class='orbit moon-orbit'>
                        <div class='pos'>
                            <div class='moon'></div>
                        </div>
                    </div>
                    <div class='planet' style='background: #3a9ad9;'>
                        <dl class='infos'><dt>Tierra</dt></dl>
                    </div>
                </div>
            </div>
        </div>
        <div id='dbz-other-planets'>
            <div class='dbz-planet' id='namek'>
                <div class='triple-sun'>
                    <div class='sun sun1'></div>
                    <div class='sun sun2'></div>
                    <div class='sun sun3'></div>
                </div>
                <div class='planet-body' style='background: #7ed957;'></div>
                <dl class='infos'><dt>Namek</dt></dl>
            </div>
            <div class='dbz-planet' id='vegeta'>
                <div class='planet-body' style='background: #b5651d;'></div>
                <dl class='infos'><dt>Vegeta</dt></dl>
            </div>
            <div class='dbz-planet' id='yardrat'>
                <div class='planet-body' style='background: #e0e0e0;'></div>
                <dl class='infos'><dt>Yardrat</dt></dl>
            </div>
            <div class='dbz-planet' id='vampa'>
                <div class='planet-body' style='background: #1e90ff;'></div>
                <div class='moon vampa-moon'></div>
                <dl class='infos'><dt>Vampa</dt></dl>
            </div>
        </div>
    `;

    // --- BOTÓN DBZ ---
    $("#btn-dbz").off("click").on("click", function () {
        $("#solar-system").hide();
        $("#dbz-system").show();
        $("#btn-dbz").hide();
        $("#btn-solar").show();
    });
    $("#btn-solar").off("click").on("click", function () {
        $("#dbz-system").hide();
        $("#solar-system").show();
        $("#btn-dbz").show();
        $("#btn-solar").hide();
    });

    // --- RESTO DE LÓGICA ORIGINAL ---
    var init = function () {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function (view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function (e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function (e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function () { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function () { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function () { universe.removeClass().addClass("scale-stretched set-speed"); });
    $(".set-size").click(function () { universe.removeClass().addClass("scale-s set-size"); });
    $(".set-distance").click(function () { universe.removeClass().addClass("scale-d set-distance"); });

    init();

});