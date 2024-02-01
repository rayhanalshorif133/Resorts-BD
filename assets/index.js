$(() => {
    handleClickSearchDestination();
    handleClickSelectDateRange();
    handleSlider();
    handleSearchSideBarItems();
    checkBoxHandler();
    handleOwlCarouselHover();
    handleFooterBtn();
});

const handleFooterBtn = () => {
    $(".pc_footer button").click(function () {
        $(".pc_footer button").removeClass("border-b-2");
        // $(".pc_footer button").find('span').removeClass("text-resort font-medium");
        // $(".pc_footer button").find('i').removeClass("fa-sort-down mt-1 mb-1").addClass("mt-1 fa-sort-up");
        $(this).toggleClass("border-b-2");
        // $(this).find('span').toggleClass("text-resort font-medium");
        // $(this).find('i').toggleClass("fa-sort-up fa-sort-down mt-1 mb-1");
        
        $('.pc_footer_content').find('.company_information').toggleClass('hidden h-0 h-auto');
    });
}

const handleOwlCarouselHover = () => {
    $(".owl_carousel_Hover").hover(function () {
        $(".showBtnOwlCarouselHoverBtn").removeClass('hidden').addClass('flex');
    });

    $(".owl_carousel_Hover").mouseleave(function () {
        setTimeout(() => {
            $(".showBtnOwlCarouselHoverBtn").removeClass('flex').addClass('hidden');
        }, 3000);
    });
};

const handleSlider = () => {

    var owl_carousels = $('.owl-carousel');

    owl_carousels.each(function (item) {
        var sliderName = $(this).attr('data-slider-name');
        var item_small = $(this).attr('data-item_small');
        var item_medium = $(this).attr('data-item_medium');
        var item_large = $(this).attr('data-item_large');

        item_small? item_small = item_small : item_small = 1;
        item_medium? item_medium = item_medium : item_medium = 2;
        item_large? item_large = item_large : item_large = 3;

        $(this).addClass(sliderName);
        var className = '.' + sliderName;
        $(className).owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            nav: false,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: item_small
                },
                600: {
                    items: item_medium
                },
                1000: {
                    items: item_large
                }
            }
        });

        $('.owl-dots').addClass('hidden');
    });
    
    $('.slide_left_btn').click(function () {
        var target = $(this).parent().attr('data-target');
        target = '.' + target;
        $(target).trigger('prev.owl.carousel');
    });

    $('.slide_right_btn').click(function () {
        var target = $(this).parent().attr('data-target');
        target = '.' + target;
        $(target).trigger('next.owl.carousel');
    });

};

const handleClickSelectDateRange = () => {
    const currentDate = moment().format('MM/DD/YYYY');
    const after2Days = moment().add(2, 'days').format('MM/DD/YYYY');


    function cb(start, end) {
        const startDate = moment(start).format(`DD MMM'YY`);
        const endDate = moment(end).format(`DD MMM'YY`);
        const startSpan = `
        <div>  
              <h5 class="text-sm text-resort-secondary-light font-rubik">Check-in</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="start_date_value" name="start_date_value" class="w-fit font-rubik text-black font-bold text-2xl focus:outline-none"
                    value="${startDate}" />
                  <p class="text-base text-resort-secondary font-medium font-rubik">Thursday</p>
                </div>
        </div>
        <div>
                <h5 class="text-sm text-resort-secondary-light font-rubik">Check-out</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="end_date_value" name="end_date_value" class="w-fit font-rubik text-black font-bold text-2xl focus:outline-none"
                    value="${endDate}" />
                  <p class="text-base text-resort-secondary font-medium font-rubik">Thursday</p>
                </div>
            </div>
        `;
        $('#reportrange span').html(startSpan);
        // $(document).find('.applyBtn').trigger('click');
    }

    $('#reportrange').daterangepicker({
        currentDate: currentDate,
        after2Days: after2Days,
        // remove appy btn
        autoApply: true,
    }, cb);

    cb(currentDate, after2Days);

};

const handleClickSearchDestination = () => {
    $(".search_destination").click(function () {
        $(".search_destination_main").addClass('hidden');
        $(".search_destination_form").removeClass('hidden');
        $(".search_destination").focus();
    });

    $(".search_destination").keyup(function () {
        const value = $(this).val().toLowerCase();
        $(".destination_option").each(function () {
            const text = $(this).text().toLowerCase();
            if (text.search(value) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });

    $(".return_main_destination_form").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".select_date_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
    });

    $(".destination_option").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
        const value = $(this).find('option').val();
        $(".search_destination").val(value).addClass('text-xl font-semibold');
    });
};

const handleSearchSideBarItems = () => {
    $(".showHideBtn").click(function () {
        var isShowOrHide = $(this).text();
        $(this).text(isShowOrHide == 'Show' ? 'Hide' : 'Show');
        $(this).parent().next().toggleClass('hidden');
    });
};

const checkBoxHandler = () => {
    // type="checkbox"
    $(document).on('click', '.checkbox', function () {
        const input = $(this).find('input[type="checkbox"]');
        input.prop('checked') ? input.prop('checked', false) : input.prop('checked', true);
    });

    $(document).on('click', '.star_search', function (e) {
        const isFindHidden = $(this).find(".hidden");
        const len = isFindHidden.length;
        len > 0 ? $(this).find(".hidden").removeClass('hidden') : $(this).find("div").addClass('hidden');
    });
};