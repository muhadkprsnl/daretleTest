import { Profile } from "../../sample/Dev_Component/Report/profile"

describe('Profile-Dev', () => {
    const profileInfo = new Profile();


    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        cy.login('academy@roninaks.com', 'P@ssw0rd');
    });



    //Personal Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify the Player.', () => {
        profileInfo.visitMembers();
        profileInfo.searchThePlayer('Abdul');

    });

    // it('Verify that Enter the Valid details.', () => {
    //     profileInfo.visitMembers();
    //     profileInfo.searchThePlayer('Elva');
    //     profileInfo.editPersonalInfo();
    //     profileInfo.fillUpPersonalInfo('New', 'Shock', 2024, 'Mar', 15)

    // });

    // it('Verify that Enter the Invalid Email with Blank Space.', () => {
    //     profileInfo.visitMembers();
    //     profileInfo.searchThePlayer('   ');
    //     profileInfo.editPersonalInfo();
    //     profileInfo.fillUpPersonalInfo('New', 'Shock', 2024, 'Mar', 15)

    // });

    //need to add the missed out flow by viashnov
    // it.only('Verify that Enter the Invalid Email.', () => {
    //     profileInfo.visitMembers();
    //     //profileInfo.searchThePlayer('Elva');
    //     profileInfo.viewRandomBio();
    //     profileInfo.editPersonalInfo();
    //     profileInfo.enterPIfname('  ')
    //     profileInfo.clickSavePI();
    //     profileInfo.failedMsg();
    //     profileInfo.dtPIfname();

    // });

    it('Verify that Enter the Empty First Name', () => {
        profileInfo.visitMembers();
        profileInfo.viewRandomBio();
        profileInfo.editPersonalInfo();
        profileInfo.clearPIfname();
        profileInfo.clickSavePI();
        profileInfo.failedMsg();
        profileInfo.dtPIfname();

    });

    it('Verify that Enter the Invalid First Name with Blank Space', () => {
        profileInfo.visitMembers();
        profileInfo.viewRandomBio();
        profileInfo.editPersonalInfo();
        profileInfo.enterPIfname("   ");
        profileInfo.clickSavePI();
        profileInfo.failedMsg();
        profileInfo.dtPIfname();

    });

    //username Disabled
    // it('Verify that Enter the Empty Username.', () => {
    //     profileInfo.viewRandomBio();
    //     profileInfo.editPersonalInfo();
    //     profileInfo.clearPIUsername();
    //     profileInfo.clickSavePI();
    //     profileInfo.failedMsg();
    //     //profileInfo.dtPIUsername();
    // });


    // it('Verify that Enter the Invalid Username with Blank Space.', () => {
    //     profileInfo.viewRandomBio();
    //     profileInfo.editPersonalInfo();
    //     profileInfo.enterPIUsername("    ");
    //     profileInfo.clickSavePI();
    //     profileInfo.failedMsg();
    //     //profileInfo.dtPIUsername();
    // });

    // it('Verify that Enter the Duplicate Username.', () => {
    //     profileInfo.viewRandomBio();
    //     profileInfo.editPersonalInfo();
    //     profileInfo.enterPIUsername('sports.checking')
    //     profileInfo.clickSavePI();
    //     profileInfo.failedMsg();
    //     //profileInfo.dtPIUsername();
    // });

    it('Verify that Enter the Invalid DOB', () => {
        profileInfo.viewRandomBio();
        profileInfo.editPersonalInfo();
        profileInfo.selectDate(2026, 'Mar', 15);
        profileInfo.clickSavePI();
        profileInfo.failedMsg();
        profileInfo.dtPIDOB();

    });

    it('Verify that Enter the Food Preference', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditNutrition();
        profileInfo.enterFoodItems('bread, omlete');
        profileInfo.clickSaveFood();
        profileInfo.nutritionsuccessMsg();

    });

    // it.only('Verify that Enter the invalid Food Preference', () => {
    //     profileInfo.viewRandomBio();
    //     profileInfo.clickEditNutrition();
    //     profileInfo.enterFoodItems(' ');
    //     profileInfo.clickSaveFood();
    //     profileInfo.nutritionsuccessMsg();

    // });


    it('Verify that Checkbox of Need Nutrition work properly', () => {
        profileInfo.viewRandomBio();
        profileInfo.handleNutritionCheckbox();
        // profileInfo.notCheckedNeedNutrition();
        profileInfo.needNutritionsuccessMsg();

    });


    //Physical Info
    it('Verify that BMI', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditPhy();
        profileInfo.enterHeight('170');
        profileInfo.enterWeight('65');
        profileInfo.savePhyDetails();
        //scs msgf???

    });

    it('Verify that Invalid Height', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditPhy();
        profileInfo.enterHeight(' ');
        profileInfo.enterWeight('65');
        profileInfo.savePhyDetails();
        //scs msgf???

    });

    it('Verify that Invalid Weight', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditPhy();
        profileInfo.enterHeight('120');
        profileInfo.enterWeight(' ');
        profileInfo.savePhyDetails();
        //scs msgf???

    });

    //Contact info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('Verify that ContactInfo', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.selectPhoneCode('+90');
        profileInfo.enterPhoneNumber('sdqw1232435')
        profileInfo.enterContactMail();
        profileInfo.enterContatAddress('kall bhh')
        profileInfo.enterContactDistrict("wsjdjhn")
        profileInfo.enterContactCity('ekm')
        profileInfo.enterContatState("Kerala")
        profileInfo.enterContactPincode("3422335");
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateAllContactDetails();

    })

    it('Verify that Invalid Contact Phone Code', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.selectPhoneCode('+91');
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validatePhoneCode();
    })

    it('Verify that Invalid Contact Phone Number', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterPhoneNumber('sdqw1232435')
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validatePhoneNumber();
    })

    it('Verify that Invalid Contact Email', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterContactMail();
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateContactMail();
    })

    it('Verify that Invalid Contact Address', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterContatAddress('kall bhh')
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateContactAddress();
    })

    it('Verify that Invalid Contact District', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterContactDistrict("Kozhikode")
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateContactDistrict();
    })

    it('Verify that Invalid Contact City', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterContactCity('ernakulam city')
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateContactCity();
    })


    it('Verify that Invalid Contact State', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterContatState("Kerala")
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateContactState();
    })

    it('Verify that Invalid Contact Pincde', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickEditContactInfo();
        profileInfo.enterContactPincode("   ");
        profileInfo.saveContactInfo();
        profileInfo.contactInfotMsg();
        profileInfo.validateContactPincode();
    })



    //Educational Info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('Verify that Valid Educational Info', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("2004")
        profileInfo.clickSaveEducationDetails();
        profileInfo.educationalSuccessMsg();
        profileInfo.verifySavedEducationDetails();

    })

    it('Verify that Invalid  University with Blank Space', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("  ");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("2004")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearValidationMsg();

    })

    it('Verify that Empty University Info', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("2004")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();
    })

    it('Verify that Invalid Course with Blank Space', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("  ");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("2004")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearValidationMsg();
    })

    it('Verify that Empty Course ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("2004")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();
    })

    it('Verify that Invalid Educational Year In (Empty) ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterEndYear("2000")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();

    })



    it('Verify that Invalid Educational Year In(" ") ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("   ");
        profileInfo.enterEndYear("2000")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();

    })

    it('Verify that Invalid Educational Year In("20000") ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("20010");
        profileInfo.enterEndYear("2000")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();

    })

    it('Verify that Invalid Educational Year Out (empty) ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2001");
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();

    })

    it('Verify that Invalid Educational Year Out(" ") ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("  ")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearsValidationMsg();

    })

    it('Verify that Invalid Educational Year Out("20000") ', () => {
        //cy.screenshot('custom-screenshot-name');
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2001");
        profileInfo.enterEndYear("20000")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearValidationMsg();

    })

    it('Verify that Invalid  Year In and Year Out  ', () => {
        profileInfo.viewRandomBio();
        profileInfo.clickaddEducation();
        profileInfo.enterUniversityName("Harvard");
        profileInfo.enterCourse("Btech");
        profileInfo.enterStyear("2004");
        profileInfo.enterEndYear("2000")
        profileInfo.clickSaveEducationDetails();
        profileInfo.eduYearValidation2Msg();

    })

    //Deletion  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Delete then Educational Info  ', () => {
        profileInfo.viewRandomBio();
        profileInfo.dltEduDetails();
        profileInfo.clickDltConform();

    })

    it('Verify that Delete then Educational Info  ', () => {
        profileInfo.viewRandomBio();
        profileInfo.dltEduDetails();
        profileInfo.clickCancelConform();


    })











});