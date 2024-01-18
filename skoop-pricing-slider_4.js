jQuery(function(){
//****************************************************************
// Client update portion start
//****************************************************************        
const pricing = {
  "1-10":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=1-3-month-1",
      },
      "essentials": {
        "price": "20.00",
        "url": "https://skoop.webflow.io/pricing?id=1-3-month-2",
      },
      "pro": {
        "price": "54.99",
        "url": "https://skoop.webflow.io/pricing?id=1-3-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=1-3-year-1",
      },
      "essentials": {
        "price": "18.00",
        "url": "https://skoop.webflow.io/pricing?id=1-3-year-2",
      },
      "pro": {
        "price": "49.49",
        "url": "https://skoop.webflow.io/pricing?id=1-3-year-3",
      }
    }
  },
  "11-20":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=4-6-month-1",
      },
      "essentials": {
        "price": "18.00",
        "url": "https://skoop.webflow.io/pricing?id=4-6-month-2",
      },
      "pro": {
        "price": "44.99",
        "url": "https://skoop.webflow.io/pricing?id=4-6-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=4-6-year-1",
      },
      "essentials": {
        "price": "16.20",
        "url": "https://skoop.webflow.io/pricing?id=4-6-year-2",
      },
      "pro": {
        "price": "40.49",
        "url": "https://skoop.webflow.io/pricing?id=4-6-year-3",
      }
    }
  },
  "21-30":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=7-9-month-1",
      },
      "essentials": {
        "price": "16.00",
        "url": "https://skoop.webflow.io/pricing?id=7-9-month-2",
      },
      "pro": {
        "price": "34.99",
        "url": "https://skoop.webflow.io/pricing?id=7-9-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=7-9-year-1",
      },
      "essentials": {
        "price": "14.40",
        "url": "https://skoop.webflow.io/pricing?id=7-9-year-2",
      },
      "pro": {
        "price": "31.49",
        "url": "https://skoop.webflow.io/pricing?id=7-9-year-3",
      }
    }
  },
  "31-40":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=10-12-month-1",
      },
      "essentials": {
        "price": "14.00",
        "url": "https://skoop.webflow.io/pricing?id=10-12-month-2",
      },
      "pro": {
        "price": "32.49",
        "url": "https://skoop.webflow.io/pricing?id=10-12-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=10-12-year-1",
      },
      "essentials": {
        "price": "12.60",
        "url": "https://skoop.webflow.io/pricing?id=10-12-year-2",
      },
      "pro": {
        "price": "29.24",
        "url": "https://skoop.webflow.io/pricing?id=10-12-year-3",
      }
    }
  },
  "41-50":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=13-15-month-1",
      },
      "essentials": {
        "price": "12.00",
        "url": "https://skoop.webflow.io/pricing?id=13-15-month-2",
      },
      "pro": {
        "price": "29.99",
        "url": "https://skoop.webflow.io/pricing?id=13-15-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=13-15-year-1",
      },
      "essentials": {
        "price": "10.80",
        "url": "https://skoop.webflow.io/pricing?id=13-15-year-2",
      },
      "pro": {
        "price": "26.99",
        "url": "https://skoop.webflow.io/pricing?id=13-15-year-3",
      }
    }
  }
};
var DefaultScreenValue = 3;
//****************************************************************
// Client update portion end
//****************************************************************

// Utility func getPriceRange()
function getPriceRange(SlideRangeValue) {
  var SlideRangeResult = '';
  jQuery.each(pricing, function(range, MonthYaer) {
    let splitArr = range.split("-");
    let min = parseInt(splitArr[0]);
    let max = parseInt(splitArr[1]);

    if(min <= parseInt(SlideRangeValue) && max >= parseInt(SlideRangeValue)) {
      SlideRangeResult = MonthYaer;  
    }
    
  });
  return SlideRangeResult;   
}

// Utility func getRenderData()
function getRenderData(SlideRangeValue) {
  let PricingObj = getPriceRange(SlideRangeValue);

  jQuery.each(PricingObj, function(MonthYaer, Lists) {
    jQuery.each(Lists, function(key, value) {
      jQuery('.'+ MonthYaer + '-' + key).find('span.price').text(value.price);
      jQuery('.'+ MonthYaer + '-' + key + '.url').attr('href', value.url);
    });
  });   
}

// jQuery UI range slider
jQuery("#range-slider").slider({
  range: "min",
  min: 1,
  max: 50,
  value: DefaultScreenValue,
  step: 1,
  create: function( event, ui ) {
    jQuery('.ui-slider-handle').html('<div class="pricing-button-holder-wrapper"><span>'+ DefaultScreenValue +'</span> Screens</div>');
    jQuery('.ui-slider').addClass('pricing-line');
    jQuery('.ui-slider-range').addClass('pricing-moving-line');

    getRenderData(DefaultScreenValue);
  },
  slide: function( event, ui ) {
   jQuery(this).find('.pricing-button-holder-wrapper span').text(ui.value);
    getRenderData(ui.value);
  }
});

jQuery("#range-slider").append(`<div class="pricing-divider-line one"></div><div class="pricing-divider-line two"></div><div class="pricing-divider-line three"></div><div class="pricing-divider-line four"></div>`);
});