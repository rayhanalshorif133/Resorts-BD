$(() => {
    handleAutoInculdeFiles();
    handleClickSearchDestination();
    handleClickSelectDateRange();
    handleSlider();
    handleSearchSideBarItems();
    checkBoxHandler();
    handleOwlCarouselHover();
    handleFooterBtn();
    handleAuthForm();
    handleAfterSelectContainer();
    handleBookNowBtn();
    handleMobileSearchFilter();
    mobileSearchFilterCheckAvaiabilityBtn();
    handleCheckAvailabilitySelectDateRange();
    handleCheckAvachangeBtn();
});


const handleCheckAvachangeBtn = () => {
    $("#checkAvachangeBtn").click(function () {
        $("#book_now_container").toggleClass('top-290px').toggleClass('top-520px');
        document.querySelector('.postSelectDateRange').classList.toggle('hidden');
    });
};

const mobileSearchFilterCheckAvaiabilityBtn = () => {
    $(".mobileSearchFilterCheckAvaiabilityBtn").click(function () {
        $(".mobileSearchFilterCheckAvaiabilityBtn").removeClass('bg-gray-200');
        $(".mobileSearchFilterCheckAvaiabilityBtn").find('span').removeClass('text-resort').removeClass('font-semibold');
        $(this).toggleClass('bg-gray-200');
        $(this).find('span').toggleClass('text-resort').toggleClass('font-semibold');
    });
};

const handleMobileSearchFilter = () => {
    $(".mobileSearchFilterBtn").click(function () {
        $(".mobileSearchFilterBtn").removeClass('bg-gray-200');
        $(this).toggleClass('bg-gray-200');
        var target = $(this).attr('data-target');
        $(this).toggleClass(target);
        $(".mobileSearchFilterBtn").each(function () {
            if ($(this).attr('data-target') !== target) {
                var target = $(this).attr('data-target');
                target = '#' + target;
                $(target).addClass('hidden');
            }
        });
        target = '#' + target;
        $(target).toggleClass('hidden');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.mobileSearchFilterBtn').length && 
        !$(event.target).closest('#hotel_name_filter_input').length &&
        !$(event.target).closest('#price_filter_input').length &&
        !$(event.target).closest('#star_rating_filter_input').length        
        ) {
            $(".mobileSearchFilterBtn").removeClass('bg-gray-200');
            $(".mobileSearchFilterBtn").each(function () {
                var target = $(this).attr('data-target');
                target = '#' + target;
                $(target).addClass('hidden');
            });
        }
    });
    
};




const handleBookNowBtn = () => {
    $('#book_now_btn').click(function () {
        $("#selected_room_panel").toggleClass('translate-x-full');
        $(this).toggleClass('translate-x-full');

        setTimeout(() => {
            $("#selected_room_panel").toggleClass('translate-x-full');
            $(this).toggleClass('translate-x-full');
        }, 2000);
    });
};

const handleAfterSelectContainer = () => {

    $(".check_availability_select_btn").click(function () {
        const select_availability = $(this).closest('.check_availability_item').find('.after_select_container');
        select_availability.hasClass('hidden') ?
            select_availability.removeClass('hidden').addClass('flex') : after_select_container.addClass('hidden').removeClass('flex');
        $(this).addClass('hidden');
    });



};

const handleAutoInculdeFiles = () => {
    $("#nav_bar_content").load("./components/nav_bar_content.html");
    $("#footer_for_pc").load("./components/footer_for_pc.html");
    $("#footer_for_mobile").load("./components/footer_for_mobile.html");
};

const handleAuthForm = () => {
    $(".authBtn").click(function () {
        const target = $(this).attr('data-target');
        $(".authBtn").removeClass('authActiveBtn authInactiveBtn').addClass('authInactiveBtn');
        $(this).addClass('authActiveBtn').removeClass('authInactiveBtn');
        if (target === 'signIn') {
            $(".signUp").addClass('hidden');
            $(".signIn").removeClass('hidden');
            $(".signUpBtn").removeClass('authActiveBtn');
        } else {
            $(".signIn").addClass('hidden');
            $(".signUp").removeClass('hidden');
            $(".signInBtn").removeClass('authActiveBtn');
        }
    });
};

const handleFooterBtn = () => {
    $(".pc_footer button").click(function () {
        $(".pc_footer button").removeClass("border-b-2");
        $(this).toggleClass("border-b-2");

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

        item_small ? item_small = item_small : item_small = 1;
        item_medium ? item_medium = item_medium : item_medium = 2;
        item_large ? item_large = item_large : item_large = 3;

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
        const startDate_day = moment(start).format('dddd');
        const endDate_day = moment(end).format('dddd');
        const startSpan = `
        <div>  
              <h5 class="text-sm text-resort-secondary-light font-rubik">Check-in</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="start_date_value" name="start_date_value" class="w-fit font-rubik text-black font-bold text-sm sm:text-2xl focus:outline-none"
                    value="${startDate}" />
                  <p class="text-xs sm:text-base text-resort-secondary font-medium font-rubik">${startDate_day}</p>
                </div>
        </div>
        <div>
                <h5 class="text-sm text-resort-secondary-light font-rubik">Check-out</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="end_date_value" name="end_date_value" class="w-fit font-rubik text-black font-bold text-sm sm:text-2xl focus:outline-none"
                    value="${endDate}" />
                  <p class="text-xs sm:text-base text-resort-secondary font-medium font-rubik">${endDate_day}</p>
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

const handleCheckAvailabilitySelectDateRange = () => {
    const currentDate = moment().format('MM/DD/YYYY');
    const after2Days = moment().add(2, 'days').format('MM/DD/YYYY');
    var startSearchDate = currentDate;
    var endSearchDate = after2Days;
    function cb(start, end) {
        const startDate = moment(start).format(`DD MMM'YY`);
        const endDate = moment(end).format(`DD MMM'YY`);
        const startDate_day = moment(start).format('dddd');
        const endDate_day = moment(end).format('dddd');
        startSearchDate = moment(start).format('DD/MM/YYYY');
        endSearchDate = moment(end).format('DD/MM/YYYY');
        const startSpan = `
        <div>  
              <h5 class="text-sm text-resort-secondary-light font-rubik">Check-in</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="start_date_value" name="start_date_value" class="w-fit font-rubik text-black font-bold text-sm sm:text-2xl focus:outline-none"
                    value="${startDate}" />
                  <p class="text-xs sm:text-base text-resort-secondary font-medium font-rubik">${startDate_day}</p>
                </div>
        </div>
        <div>
                <h5 class="text-sm text-resort-secondary-light font-rubik">Check-out</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="end_date_value" name="end_date_value" class="w-fit font-rubik text-black font-bold text-sm sm:text-2xl focus:outline-none"
                    value="${endDate}" />
                  <p class="text-xs sm:text-base text-resort-secondary font-medium font-rubik">${endDate_day}</p>
                </div>
            </div>
        `;
        $('#check_availabilityDateRangeSearch span').html(startSpan);
    }
    $('#check_availabilityDateRangeSearch').daterangepicker({
        currentDate: currentDate,
        after2Days: after2Days,
        // remove appy btn
        autoApply: true,
    }, cb);
    cb(currentDate, after2Days);

    $("#check_availabilityDateRangeSearchBtn").click(function () {
        $("#check_availability_search_start_date").text(startSearchDate);
        $("#check_availability_search_end_date").text(endSearchDate);
        document.querySelector('.postSelectDateRange').classList.toggle('hidden');

    });

    $("#check_availabilityDateRangeSearchNextBtn").click(function () {
        startSearchDate = moment(startSearchDate, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
        endSearchDate = moment(endSearchDate, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
        $("#check_availability_search_start_date").text(startSearchDate);
        $("#check_availability_search_end_date").text(endSearchDate);
    });

    $("#check_availabilityDateRangeSearchPreviousBtn").click(function () {
        startSearchDate = moment(startSearchDate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
        endSearchDate = moment(endSearchDate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
        $("#check_availability_search_start_date").text(startSearchDate);
        $("#check_availability_search_end_date").text(endSearchDate);
    });

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