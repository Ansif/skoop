jQuery(function(){
//****************************************************************
// Client update portion start
//****************************************************************        
const pricing = {
  "1-3":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=1-3-month-1",
      },
      "essentials": {
        "price": "19",
        "url": "https://skoop.webflow.io/pricing?id=1-3-month-2",
      },
      "pro": {
        "price": "39",
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
        "price": "17.1",
        "url": "https://skoop.webflow.io/pricing?id=1-3-year-2",
      },
      "pro": {
        "price": "35.1",
        "url": "https://skoop.webflow.io/pricing?id=1-3-year-3",
      }
    }
  },
  "4-6":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=4-6-month-1",
      },
      "essentials": {
        "price": "18.75",
        "url": "https://skoop.webflow.io/pricing?id=4-6-month-2",
      },
      "pro": {
        "price": "38.75",
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
        "price": "16.875",
        "url": "https://skoop.webflow.io/pricing?id=4-6-year-2",
      },
      "pro": {
        "price": "34.875",
        "url": "https://skoop.webflow.io/pricing?id=4-6-year-3",
      }
    }
  },
  "7-9":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=7-9-month-1",
      },
      "essentials": {
        "price": "18.50",
        "url": "https://skoop.webflow.io/pricing?id=7-9-month-2",
      },
      "pro": {
        "price": "38.50",
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
        "price": "16.65",
        "url": "https://skoop.webflow.io/pricing?id=7-9-year-2",
      },
      "pro": {
        "price": "34.65",
        "url": "https://skoop.webflow.io/pricing?id=7-9-year-3",
      }
    }
  },
  "10-12":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=10-12-month-1",
      },
      "essentials": {
        "price": "18.25",
        "url": "https://skoop.webflow.io/pricing?id=10-12-month-2",
      },
      "pro": {
        "price": "38.25",
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
        "price": "16.425",
        "url": "https://skoop.webflow.io/pricing?id=10-12-year-2",
      },
      "pro": {
        "price": "34.425",
        "url": "https://skoop.webflow.io/pricing?id=10-12-year-3",
      }
    }
  },
  "13-15":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=13-15-month-1",
      },
      "essentials": {
        "price": "18",
        "url": "https://skoop.webflow.io/pricing?id=13-15-month-2",
      },
      "pro": {
        "price": "38",
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
        "price": "16.2",
        "url": "https://skoop.webflow.io/pricing?id=13-15-year-2",
      },
      "pro": {
        "price": "34.2",
        "url": "https://skoop.webflow.io/pricing?id=13-15-year-3",
      }
    }
  },
  "16-18":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=16-18-month-1",
      },
      "essentials": {
        "price": "17.75",
        "url": "https://skoop.webflow.io/pricing?id=16-18-month-2",
      },
      "pro": {
        "price": "37.75",
        "url": "https://skoop.webflow.io/pricing?id=16-18-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=16-18-year-1",
      },
      "essentials": {
        "price": "15.975",
        "url": "https://skoop.webflow.io/pricing?id=16-18-year-2",
      },
      "pro": {
        "price": "33.975",
        "url": "https://skoop.webflow.io/pricing?id=16-18-year-3",
      }
    }
  },
  "19-21":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=19-21-month-1",
      },
      "essentials": {
        "price": "17.25",
        "url": "https://skoop.webflow.io/pricing?id=19-21-month-2",
      },
      "pro": {
        "price": "37.25",
        "url": "https://skoop.webflow.io/pricing?id=19-21-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=19-21-year-1",
      },
      "essentials": {
        "price": "15.525",
        "url": "https://skoop.webflow.io/pricing?id=19-21-year-2",
      },
      "pro": {
        "price": "33.525",
        "url": "https://skoop.webflow.io/pricing?id=19-21-year-3",
      }
    }
  },
  "22-24":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=22-24-month-1",
      },
      "essentials": {
        "price": "16.75",
        "url": "https://skoop.webflow.io/pricing?id=22-24-month-2",
      },
      "pro": {
        "price": "36.75",
        "url": "https://skoop.webflow.io/pricing?id=22-24-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=22-24-year-1",
      },
      "essentials": {
        "price": "15.075",
        "url": "https://skoop.webflow.io/pricing?id=22-24-year-2",
      },
      "pro": {
        "price": "33.075",
        "url": "https://skoop.webflow.io/pricing?id=22-24-year-3",
      }
    }
  },
  "25-27":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=25-27-month-1",
      },
      "essentials": {
        "price": "16.25",
        "url": "https://skoop.webflow.io/pricing?id=25-27-month-2",
      },
      "pro": {
        "price": "36.25",
        "url": "https://skoop.webflow.io/pricing?id=25-27-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=25-27-year-1",
      },
      "essentials": {
        "price": "14.625",
        "url": "https://skoop.webflow.io/pricing?id=25-27-year-2",
      },
      "pro": {
        "price": "32.625",
        "url": "https://skoop.webflow.io/pricing?id=25-27-year-3",
      }
    }
  },
   "28-30":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=28-30-month-1",
      },
      "essentials": {
        "price": "15.75",
        "url": "https://skoop.webflow.io/pricing?id=28-30-month-2",
      },
      "pro": {
        "price": "35.75",
        "url": "https://skoop.webflow.io/pricing?id=28-30-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=28-30-year-1",
      },
      "essentials": {
        "price": "14.175",
        "url": "https://skoop.webflow.io/pricing?id=28-30-year-2",
      },
      "pro": {
        "price": "32.175",
        "url": "https://skoop.webflow.io/pricing?id=28-30-year-3",
      }
    }
  },
  "31-33":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=31-33-month-1",
      },
      "essentials": {
        "price": "15.25",
        "url": "https://skoop.webflow.io/pricing?id=31-33-month-2",
      },
      "pro": {
        "price": "35.25",
        "url": "https://skoop.webflow.io/pricing?id=31-33-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=31-33-year-1",
      },
      "essentials": {
        "price": "13.725",
        "url": "https://skoop.webflow.io/pricing?id=31-33-year-2",
      },
      "pro": {
        "price": "31.725",
        "url": "https://skoop.webflow.io/pricing?id=31-33-year-3",
      }
    }
  },
  "34-36":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=34-36-month-1",
      },
      "essentials": {
        "price": "14.75",
        "url": "https://skoop.webflow.io/pricing?id=34-36-month-2",
      },
      "pro": {
        "price": "34.75",
        "url": "https://skoop.webflow.io/pricing?id=34-36-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=34-36-year-1",
      },
      "essentials": {
        "price": "13.275",
        "url": "https://skoop.webflow.io/pricing?id=34-36-year-2",
      },
      "pro": {
        "price": "31.275",
        "url": "https://skoop.webflow.io/pricing?id=34-36-year-3",
      }
    }
  },
  "37-39":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=37-39-month-1",
      },
      "essentials": {
        "price": "14.25",
        "url": "https://skoop.webflow.io/pricing?id=37-39-month-2",
      },
      "pro": {
        "price": "34.25",
        "url": "https://skoop.webflow.io/pricing?id=37-39-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=37-39-year-1",
      },
      "essentials": {
        "price": "12.825",
        "url": "https://skoop.webflow.io/pricing?id=37-39-year-2",
      },
      "pro": {
        "price": "30.825",
        "url": "https://skoop.webflow.io/pricing?id=37-39-year-3",
      }
    }
  },
  "40-42":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=40-42-month-1",
      },
      "essentials": {
        "price": "13.75",
        "url": "https://skoop.webflow.io/pricing?id=40-42-month-2",
      },
      "pro": {
        "price": "32.75",
        "url": "https://skoop.webflow.io/pricing?id=40-42-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=40-42-year-1",
      },
      "essentials": {
        "price": "12.375",
        "url": "https://skoop.webflow.io/pricing?id=40-42-year-2",
      },
      "pro": {
        "price": "29.475",
        "url": "https://skoop.webflow.io/pricing?id=40-42-year-3",
      }
    }
  },
  "43-45":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=43-45-month-1",
      },
      "essentials": {
        "price": "13.25",
        "url": "https://skoop.webflow.io/pricing?id=43-45-month-2",
      },
      "pro": {
        "price": "32.25",
        "url": "https://skoop.webflow.io/pricing?id=43-45-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=43-45-year-1",
      },
      "essentials": {
        "price": "11.925",
        "url": "https://skoop.webflow.io/pricing?id=43-45-year-2",
      },
      "pro": {
        "price": "29.025",
        "url": "https://skoop.webflow.io/pricing?id=43-45-year-3",
      }
    }
  },
  "46-48":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=46-48-month-1",
      },
      "essentials": {
        "price": "13",
        "url": "https://skoop.webflow.io/pricing?id=46-48-month-2",
      },
      "pro": {
        "price": "31",
        "url": "https://skoop.webflow.io/pricing?id=46-48-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=46-48-year-1",
      },
      "essentials": {
        "price": "11.7",
        "url": "https://skoop.webflow.io/pricing?id=46-48-year-2",
      },
      "pro": {
        "price": "27.9",
        "url": "https://skoop.webflow.io/pricing?id=46-48-year-3",
      }
    }
  },
  "49-50":
  {
    "month":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=49-50-month-1",
      },
      "essentials": {
        "price": "13",
        "url": "https://skoop.webflow.io/pricing?id=49-50-month-2",
      },
      "pro": {
        "price": "30",
        "url": "https://skoop.webflow.io/pricing?id=49-50-month-3",
      }
    },
    "year":
    {
      "free": {
        "price": "0",
        "url": "https://skoop.webflow.io/pricing?id=49-50-year-1",
      },
      "essentials": {
        "price": "11.7",
        "url": "https://skoop.webflow.io/pricing?id=49-50-year-2",
      },
      "pro": {
        "price": "27",
        "url": "https://skoop.webflow.io/pricing?id=49-50-year-3",
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