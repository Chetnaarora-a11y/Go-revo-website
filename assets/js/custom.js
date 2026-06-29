/*-----------------------------------------------------------------------------------

    Template Name: Boltx

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]

      01. mobile-nav
      02. search-box-outer
      03. countTo
      04. accordion-item 
      05. progress
      06. scrollTop
      07. #desktop-menu
      08. c-slider
      09. hero-one-slider
      10. clients-slider
      11. project-slider
      12. latest-projects-slider
      13. hero-three-slider
      14. hero-two-slider
      15. client-reviews-slider
      16. progressbar
      17. progress_bar 

-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
/*-------------------- 01. mobile-nav ----------------------------*/
jQuery('.mobile-nav .menu-item-has-children').on('click', function(e) {
      if ( jQuery( this ).hasClass('active') ) {
            jQuery(this).removeClass('active');
          } else {
            jQuery( '.mobile-nav .menu-item-has-children' ).removeClass('active');
            jQuery(this).addClass('active');
          }
        }); 
        jQuery('#nav-icon4').click(function($){
            jQuery('#mobile-nav').toggleClass('open');
        });
        jQuery('#res-cross').click(function($){
           jQuery('#mobile-nav').removeClass('open');
        });
          jQuery('.bar-menu').click(function($){
            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();
        });
        jQuery('#res-cross').click(function($){
           jQuery('#mobile-nav').removeClass('open');
        });
});
/*-------------------- 02. search-box-outer ----------------------------*/ 
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
/*-------------------- 03. countTo ----------------------------*/
/* 07. countTo */ 
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  /* start all the timers */
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});

// count end

/*-------------------- 04. accordion-item ----------------------------*/ 

  $('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
  });

// end
/*-------------------- 05. progress ----------------------------*/ 
var bars = document.querySelectorAll('.meter > span');

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 700);
// progress end
 
/*-------------------- 06. scrollTop ----------------------------*/
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}
/*-------------------- 07. #desktop-menu ----------------------------*/ 

$('#desktop-menu').click(function(){
        $(this).toggleClass('open');
        $('.desktop-menu').toggleClass('open');
    });
 
$(function() {
  $(window).scroll(function() {
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});
 let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#009a4e ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// end

/*-------------------- 08. c-slider ----------------------------*/ 
    if ($(".c-slider")[0]){
        $('.c-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          draggable: false,
          waitForAnimate: true,
          lazyLoad: 'ondemand',
          fade: false,
          speed: 30000
        });
    }
    // C-Slider

    $('.next-slide').on('click', function() {
      var img_src = "";
      $('.next-slide.nav-active').removeClass('nav-active');
      $(this).addClass('nav-active');
      img_src = $(this).html();
      $('.slider-main-img').html(img_src);
      var slideno = $(this).data('slide');
      $('.c-slider').slick('slickGoTo', slideno - 1, true);
    });


/*-------------------- 09. hero-one-slider ----------------------------*/
    if (typeof Swiper !== 'undefined') {
      var swiper = new Swiper(".hero-one-slider", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
/*-------------------- 10. clients-slider ----------------------------*/
    var swiper = new Swiper(".clients-slider", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        10: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });
/*-------------------- 11. project-slider ----------------------------*/
    var swiper = new Swiper(".project-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
        },
        556: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
/*-------------------- 12. latest-projects-slider ----------------------------*/
    var swiper = new Swiper(".latest-projects-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        10: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });
/*-------------------- 13. hero-three-slider ----------------------------*/
    var swiper = new Swiper(".hero-three-slider", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
/*-------------------- 14. hero-two-slider ----------------------------*/
     if ($(".hero-two-slider")[0]){
      $('.hero-two-slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToScroll: 1
      });
    }
/*-------------------- 15. client-reviews-slider ----------------------------*/
    var swiper = new Swiper(".client-reviews-slider", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: false,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

/*-------------------- 16. progressbar ----------------------------*/ 
  {
    function animateElements() {
      $('.progressbar').each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 180,
            thickness: 10,
            emptyFill: "rgba(250,250,250, .0)",
            fill: {
              color: '#009A4E'
            }
          }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('div').text((stepValue*100).toFixed() + "%");
          }).stop();
        }
      });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  };

  //  progress_bar
/*-------------------- 17. progress_bar ----------------------------*/
$(document).ready(function(){
  progress_bar();
});

function progress_bar() {
  var speed = 30;
  var items = $('.progress_bar').find('.progress_bar_item');
  
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
    
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}

// 2025 PREMIUM MODERN REDESIGN SCRIPTS
jQuery(document).ready(function($) {
    // 1. Sticky Glass Navbar scroll behavior with upscroll detector
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        var st = $(window).scrollTop();
        if (st > 50) {
            $('.navbar-wrapper').addClass('navbar-scrolled');
            $('.main-header').addClass('scrolled');
            
            if (st < lastScrollTop) {
                // Upscroll: show utility row again
                $('.navbar-wrapper').removeClass('utility-collapsed');
            } else {
                // Downscroll: collapse utility row
                $('.navbar-wrapper').addClass('utility-collapsed');
            }
        } else {
            $('.navbar-wrapper').removeClass('navbar-scrolled');
            $('.main-header').removeClass('scrolled');
            $('.navbar-wrapper').removeClass('utility-collapsed');
        }
        lastScrollTop = st;
    });
    // Trigger scroll check on load in case page is refreshed scrolled down
    if ($(window).scrollTop() > 50) {
        $('.navbar-wrapper').addClass('navbar-scrolled');
        $('.main-header').addClass('scrolled');
        $('.navbar-wrapper').addClass('utility-collapsed');
    }

    // 2. Mobile trigger open/close actions
    $('.navbar-mobile-trigger').on('click', function(e) {
        e.preventDefault();
        $('#mobile-nav').addClass('active');
        $('body').addClass('overflow-hidden');
    });

    $('#res-cross, .mobile-menu-overlay, .mobile-link').on('click', function(e) {
        // If clicking overlay itself or cross button or a link inside
        if ($(e.target).closest('.mobile-menu-content').length === 0 || $(e.target).hasClass('mobile-link') || $(e.target).attr('id') === 'res-cross' || $(e.target).closest('#res-cross').length > 0) {
            $('#mobile-nav').removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    });

    // 3. Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 90 // Account for navbar height
            }, 800);
        }
    });

// ==========================================
// 2025 INTERACTIVE SOLAR SAVINGS CALCULATOR
// ==========================================
jQuery(document).ready(function($) {
    // 1. Configurable Constants for calculations
    const SOLAR_CALC_CONFIG = {
        TARIFF: 7.5,                 // average Rs per kWh unit in India
        GENERATION_PER_KW: 120,       // average kWh units generated per kW monthly in India
        LOAN_INTEREST_RATE: 9.5,      // loan interest rate per annum
        LOAN_TENURE_MONTHS: 60,       // 5 years loan tenure
        CO2_FACTOR_25YR: 30.0         // Tons of CO2 offset by 1kW solar over 25 years (1.2 Tons/yr * 25)
    };

    // 2. HTML Markup to inject dynamically on page load
    const calcModalMarkup = `
    <div class="solar-calc-modal-overlay" id="solarCalcModal">
      <div class="solar-calc-modal-wrapper">
        <button class="solar-calc-close-btn" id="closeSolarCalc" aria-label="Close Calculator">&times;</button>
        <div class="solar-calc-container">
          <!-- Left Panel: Input -->
          <div class="solar-calc-panel left-panel">
            <h3 class="panel-title">Solar Savings Calculator</h3>
            <p class="panel-desc">Check your estimated system size, lifetime savings, and government subsidy instantly.</p>
            
            <form id="solarCalcForm" novalidate>
              <div class="calc-input-group">
                <label for="calcName">Full Name</label>
                <input type="text" id="calcName" placeholder="Enter your full name" required>
                <div class="calc-invalid-feedback">Please enter your name</div>
              </div>
              
              <div class="calc-input-group">
                <label for="calcPhone">Phone Number</label>
                <input type="tel" id="calcPhone" placeholder="10-digit mobile number" maxlength="10" required>
                <div class="calc-invalid-feedback">Please enter a valid 10-digit mobile number</div>
              </div>
              
              <div class="calc-input-group">
                <label for="calcPincode">PIN Code</label>
                <input type="text" id="calcPincode" placeholder="6-digit PIN code" maxlength="6" required>
                <div class="calc-invalid-feedback">Please enter a valid 6-digit PIN code</div>
              </div>
              
              <div class="calc-input-group">
                <div class="bill-label-row">
                  <label for="calcBillInput">Monthly Electricity Bill</label>
                  <div class="bill-input-wrapper">
                    <span class="currency-prefix">₹</span>
                    <input type="number" id="calcBillInput" min="1000" max="25000" value="6000" required>
                  </div>
                </div>
                
                <div class="slider-container">
                  <input type="range" id="calcBillSlider" min="1000" max="25000" step="500" value="6000" class="calc-range-slider">
                  <div class="slider-bounds">
                    <span>₹1,000</span>
                    <span>₹25,000</span>
                  </div>
                </div>
                <div class="calc-invalid-feedback" id="billError">Electricity bill must be between ₹1,000 and ₹25,000</div>
              </div>
            </form>
          </div>
          
          <!-- Right Panel: Results -->
          <div class="solar-calc-panel right-panel">
            <div class="calc-loading-overlay" id="calcLoading">
              <div class="calc-spinner"></div>
              <p style="font-weight: 600; color: var(--common-colour);">Calculating savings...</p>
            </div>
            
            <h3 class="panel-title text-center text-lg-start">Your Solar Estimate</h3>
            
            <!-- Monthly Savings Main Box -->
            <div class="savings-main-card">
              <span class="savings-card-label">Estimated Monthly Savings</span>
              <div class="savings-main-val" id="resMonthlySavings">₹0</div>
              <div class="bill-comparison-bar">
                <div class="comparison-item">
                  <span class="comp-label">Current Bill</span>
                  <span class="comp-val old-bill-val" id="resOldBill">₹6,000</span>
                </div>
                <div class="comparison-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="comparison-item">
                  <span class="comp-label">Bill After Solar</span>
                  <span class="comp-val new-bill-val" id="resNewBill">₹600</span>
                </div>
              </div>
            </div>
            
            <!-- 5-Year Savings Banner -->
            <div class="five-year-savings-banner">
              <span>Projected 5-Year Savings:</span>
              <strong id="resFiveYearSavings">₹0</strong>
            </div>
            
            <!-- Result Cards Grid -->
            <div class="calc-results-grid">
              <div class="calc-res-card">
                <div class="res-card-icon"><i class="fa-solid fa-solar-panel"></i></div>
                <div class="res-card-data">
                  <span class="res-label">System Size</span>
                  <span class="res-val" id="resSystemSize">0 kW</span>
                </div>
              </div>
              
              <div class="calc-res-card">
                <div class="res-card-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                <div class="res-card-data">
                  <span class="res-label">Govt Subsidy</span>
                  <span class="res-val text-success" id="resSubsidy">₹0</span>
                </div>
              </div>
              
              <div class="calc-res-card">
                <div class="res-card-icon"><i class="fa-solid fa-credit-card"></i></div>
                <div class="res-card-data">
                  <span class="res-label">Estimated EMI</span>
                  <span class="res-val" id="resEMI">₹0/mo</span>
                </div>
              </div>
              
              <div class="calc-res-card">
                <div class="res-card-icon"><i class="fa-solid fa-calendar-check"></i></div>
                <div class="res-card-data">
                  <span class="res-label">Payback Period</span>
                  <span class="res-val" id="resPayback">0 Years</span>
                </div>
              </div>
              
              <div class="calc-res-card">
                <div class="res-card-icon"><i class="fa-solid fa-chart-line"></i></div>
                <div class="res-card-data">
                  <span class="res-label">Annual Savings</span>
                  <span class="res-val" id="resAnnualSavings">₹0</span>
                </div>
              </div>
              
              <div class="calc-res-card">
                <div class="res-card-icon"><i class="fa-solid fa-leaf"></i></div>
                <div class="res-card-data">
                  <span class="res-label">CO₂ Offset (25 yr)</span>
                  <span class="res-val" id="resCO2">0 Tons</span>
                </div>
              </div>
            </div>
            
            <!-- Bottom fixed/sticky CTA wrapper -->
            <div class="calc-cta-wrapper">
              <button type="button" class="btn btn-primary-premium w-100" id="btnCheckExactSavings">
                CHECK MY EXACT SAVINGS <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    // Inject calculator modal markup to body
    $('body').append(calcModalMarkup);

    // 3. UI Variables & Cache
    const $modal = $('#solarCalcModal');
    const $slider = $('#calcBillSlider');
    const $numInput = $('#calcBillInput');
    const $loading = $('#calcLoading');
    
    // Calculated values object to hold state
    let lastCalculatedData = {
        bill: 6000,
        systemSize: 3,
        subsidy: 78000,
        emi: 0,
        monthlySavings: 0,
        newBill: 0
    };

    // 4. Synchronization Logic
    $slider.on('input', function() {
        $numInput.val($(this).val());
        triggerCalculation();
    });

    $numInput.on('input', function() {
        let val = parseInt($(this).val());
        if (isNaN(val)) return;
        
        // Let user type, but validate limits on change
        if (val >= 1000 && val <= 25000) {
            $slider.val(val);
            $('#billError').parent().removeClass('has-error');
            triggerCalculation();
        }
    });

    $numInput.on('blur', function() {
        let val = parseInt($(this).val());
        if (isNaN(val) || val < 1000) {
            $(this).val(1000);
            $slider.val(1000);
        } else if (val > 25000) {
            $(this).val(25000);
            $slider.val(25000);
        }
        triggerCalculation();
    });

    // 5. Calculation Function
    function performCalculations() {
        const bill = parseInt($numInput.val()) || 6000;
        
        // System Capacity: Consumption (bill / Tariff) / Month production per kW (120 units)
        const consumption = bill / SOLAR_CALC_CONFIG.TARIFF;
        let requiredKw = consumption / SOLAR_CALC_CONFIG.GENERATION_PER_KW;
        
        // Round to nearest 0.5 kW and clamp between 1kW and 20kW
        let systemSize = Math.round(requiredKw * 2) / 2;
        systemSize = Math.max(1, Math.min(20, systemSize));
        
        // Gross Cost (Indian standards before subsidy)
        let grossCost = 0;
        if (systemSize <= 1) grossCost = 65000;
        else if (systemSize <= 2) grossCost = 125000;
        else if (systemSize <= 3) grossCost = 175000;
        else grossCost = systemSize * 55000;
        
        // Government Subsidy (PM Surya Ghar rules: max 78k)
        let subsidy = 0;
        if (systemSize <= 2) {
            subsidy = systemSize * 30000;
        } else if (systemSize <= 3) {
            subsidy = 60000 + (systemSize - 2) * 18000;
        } else {
            subsidy = 78000;
        }
        
        // Net Cost
        const netCost = Math.max(0, grossCost - subsidy);
        
        // Monthly Savings: 90% of electricity bill (offsetting grid charges)
        const monthlySavings = Math.round(Math.min(bill * 0.9, systemSize * SOLAR_CALC_CONFIG.GENERATION_PER_KW * SOLAR_CALC_CONFIG.TARIFF * 0.9));
        const newBill = bill - monthlySavings;
        
        // EMI calculation (formula: P * r * (1+r)^n / ((1+r)^n - 1))
        let emi = 0;
        if (netCost > 0) {
            const P = netCost;
            const r = SOLAR_CALC_CONFIG.LOAN_INTEREST_RATE / 12 / 100;
            const n = SOLAR_CALC_CONFIG.LOAN_TENURE_MONTHS;
            emi = Math.round(P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
        }
        
        // Payback Period (years)
        let payback = 0;
        if (monthlySavings > 0) {
            payback = netCost / (monthlySavings * 12);
            payback = Math.max(2.5, Math.min(6.0, payback)); // clamp between 2.5 and 6 years based on real payback curves
        }
        
        // Lifetime Metrics
        const annualSavings = monthlySavings * 12;
        const fiveYearSavings = annualSavings * 5;
        const co2Offset = Math.round(systemSize * SOLAR_CALC_CONFIG.CO2_FACTOR_25YR);
        
        // Cache data for submission
        lastCalculatedData = {
            bill: bill,
            systemSize: systemSize,
            subsidy: subsidy,
            emi: emi,
            monthlySavings: monthlySavings,
            newBill: newBill
        };

        // 6. Update results with count-up animations
        animateCountUp('#resMonthlySavings', monthlySavings, true);
        animateCountUp('#resOldBill', bill, true);
        animateCountUp('#resNewBill', newBill, true);
        animateCountUp('#resFiveYearSavings', fiveYearSavings, true);
        
        // Static values (no count-up needed or simple update)
        $('#resSystemSize').text(systemSize + ' kW');
        $('#resSubsidy').text('₹' + subsidy.toLocaleString('en-IN'));
        $('#resEMI').text('₹' + emi.toLocaleString('en-IN') + '/mo');
        $('#resPayback').text(payback.toFixed(1) + ' Years');
        $('#resAnnualSavings').text('₹' + annualSavings.toLocaleString('en-IN'));
        $('#resCO2').text(co2Offset + ' Tons');
    }

    // Dynamic debounce logic to prevent animation flickering
    let calcTimeout;
    function triggerCalculation() {
        $loading.addClass('active');
        clearTimeout(calcTimeout);
        calcTimeout = setTimeout(function() {
            performCalculations();
            $loading.removeClass('active');
        }, 300);
    }

    // 7. Count-Up Animation Helper
    function animateCountUp(elementId, targetValue, isCurrency) {
        const $el = $(elementId);
        let start = 0;
        const duration = 500; // ms
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // EaseOut Quad function
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.round(start + (targetValue - start) * easeProgress);
            
            if (isCurrency) {
                $el.text('₹' + currentValue.toLocaleString('en-IN'));
            } else {
                $el.text(currentValue.toLocaleString('en-IN'));
            }
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    // 8. Opening and Closing Modal
    function openCalculator() {
        $modal.addClass('active');
        $('body').addClass('overflow-hidden');
        triggerCalculation(); // Perform initial calculations
    }

    function closeCalculator() {
        $modal.removeClass('active');
        $('body').removeClass('overflow-hidden');
    }

    // Intercept clicks on links pointing to #solar-calculator
    $(document).on('click', 'a[href*="#solar-calculator"]', function(e) {
        e.preventDefault();
        openCalculator();
    });

    $('#closeSolarCalc, .solar-calc-modal-overlay').on('click', function(e) {
        if (e.target === this || $(this).attr('id') === 'closeSolarCalc') {
            closeCalculator();
        }
    });

    $('.solar-calc-modal-wrapper').on('click', function(e) {
        e.stopPropagation(); // prevent closing overlay when clicking inside modal
    });

    // 9. Input fields validation on type
    $('#calcName').on('input', function() {
        if ($(this).val().trim() !== '') {
            $(this).parent().removeClass('has-error');
        }
    });

    $('#calcPhone').on('input', function() {
        let val = $(this).val().replace(/\D/g, ''); // numeric only
        $(this).val(val);
        if (val.length === 10 && /^[6-9]/.test(val)) {
            $(this).parent().removeClass('has-error');
        }
    });

    $('#calcPincode').on('input', function() {
        let val = $(this).val().replace(/\D/g, ''); // numeric only
        $(this).val(val);
        if (val.length === 6) {
            $(this).parent().removeClass('has-error');
        }
    });

    // 10. Submission CTA click logic
    $('#btnCheckExactSavings').on('click', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate name
        const nameVal = $('#calcName').val().trim();
        if (nameVal === '') {
            $('#calcName').parent().addClass('has-error');
            isValid = false;
        } else {
            $('#calcName').parent().removeClass('has-error');
        }
        
        // Validate Phone (Exactly 10 digits, starts with 6-9 in India)
        const phoneVal = $('#calcPhone').val().trim();
        if (!/^[6-9]\d{9}$/.test(phoneVal)) {
            $('#calcPhone').parent().addClass('has-error');
            isValid = false;
        } else {
            $('#calcPhone').parent().removeClass('has-error');
        }
        
        // Validate Pincode (Exactly 6 digits)
        const pinVal = $('#calcPincode').val().trim();
        if (!/^\d{6}$/.test(pinVal)) {
            $('#calcPincode').parent().addClass('has-error');
            isValid = false;
        } else {
            $('#calcPincode').parent().removeClass('has-error');
        }

        if (!isValid) return;

        // Form is valid! Close modal and carry values to the main quote form.
        closeCalculator();

        const isOnIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.split('/').pop() === '';
        
        if (isOnIndex) {
            // Directly copy values to index.html lead quote form
            populateAndScrollToLeadForm(nameVal, phoneVal, pinVal);
        } else {
            // Store details in sessionStorage and redirect to index.html#solar-quote
            const redirectData = {
                name: nameVal,
                phone: phoneVal,
                pincode: pinVal,
                calc_bill: lastCalculatedData.bill,
                calc_savings: lastCalculatedData.monthlySavings,
                calc_system_size: lastCalculatedData.systemSize,
                calc_subsidy: lastCalculatedData.subsidy,
                calc_emi: lastCalculatedData.emi,
                calc_new_bill: lastCalculatedData.newBill
            };
            sessionStorage.setItem('solar_calc_data', JSON.stringify(redirectData));
            window.location.href = 'index.html#solar-quote';
        }
    });

    // Helper: populate the homepage form and scroll smoothly
    function populateAndScrollToLeadForm(name, phone, pincode) {
        const $leadForm = $('#leadForm');
        if ($leadForm.length) {
            // Populate standard inputs
            $leadForm.find('input[name="name"]').val(name);
            $leadForm.find('input[name="phone"]').val(phone);
            $leadForm.find('input[name="pincode"]').val(pincode);
            
            // Select the closest bill amount value in quote form dropdown
            const bill = lastCalculatedData.bill;
            const $select = $leadForm.find('select[name="bill"]');
            if ($select.length) {
                if (bill < 1500) $select.val('Below ₹1,500');
                else if (bill <= 3000) $select.val('₹1,500 - ₹3,000');
                else if (bill <= 5000) $select.val('₹3,000 - ₹5,000');
                else if (bill <= 8000) $select.val('₹5,000 - ₹8,000');
                else $select.val('Above ₹8,000');
            }
            
            // Populate hidden inputs
            $('#calc_bill').val(lastCalculatedData.bill);
            $('#calc_savings').val(lastCalculatedData.monthlySavings);
            $('#calc_system_size').val(lastCalculatedData.systemSize);
            $('#calc_subsidy').val(lastCalculatedData.subsidy);
            $('#calc_emi').val(lastCalculatedData.emi);
            $('#calc_new_bill').val(lastCalculatedData.newBill);

            // Highlight the quote form briefly with a premium shadow glow
            const $needExpertSection = $('.need-expert');
            
            $('html, body').stop().animate({
                scrollTop: $('#solar-quote').offset().top - 90
            }, 800, function() {
                $needExpertSection.css({
                    'transition': 'box-shadow 0.5s ease',
                    'box-shadow': '0 0 35px rgba(0, 154, 78, 0.4)'
                });
                setTimeout(function() {
                    $needExpertSection.css('box-shadow', 'none');
                }, 2000);
            });
        }
    }

    // 11. Check on page load if redirecting from a subpage with calculations
    const cachedDataStr = sessionStorage.getItem('solar_calc_data');
    if (cachedDataStr) {
        const cached = JSON.parse(cachedDataStr);
        sessionStorage.removeItem('solar_calc_data'); // Clear cache
        
        // Wait for page resources to load and populate form
        setTimeout(function() {
            lastCalculatedData = {
                bill: cached.calc_bill,
                monthlySavings: cached.calc_savings,
                systemSize: cached.calc_system_size,
                subsidy: cached.calc_subsidy,
                emi: cached.calc_emi,
                newBill: cached.calc_new_bill
            };
            populateAndScrollToLeadForm(cached.name, cached.phone, cached.pincode);
        }, 600);
    }
});

});\n// End of Solar Savings Calculator implementation scripts\n