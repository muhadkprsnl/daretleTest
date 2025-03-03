import { personalInfo } from "../../sample/Dev_Component/PendingInvites/persomalInfo.ts"
import { parentalInfo } from "../../sample/Dev_Component/PendingInvites/parentalInfo.ts"
import { addionalInfo } from "../../sample/Dev_Component/PendingInvites/additionalInfo.ts"
import { navigation } from "../../sample/Dev_Component/PendingInvites/navigation.ts"
import { addPlayer } from "../../sample/Dev_Component/PendingInvites/addPlayer.ts"
import { randomDetails } from "../../sample/Dev_Component/PendingInvites/randomdetails.ts"
import { File } from "../../sample/Pro_Component/pro-PI/regComponents/File.ts"


describe('Pending Invites', () => {
    const PI_PersonalInfo = new personalInfo();
    const PI_ParentalInfo = new parentalInfo();
    const PI_AdditionalInfo = new addionalInfo();
    const PI_nav = new navigation();
    const PI_addPlayer = new addPlayer();
    const PI_randomDetail = new randomDetails();
    const PI_file = new File();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        // cy.login('support@dartle.app', 'P@ssw0rd');
    });





    it('should navigate to the pending invites page', () => {
        PI_PersonalInfo.enterPersonalInfo('das@12.com321', 'Janqe', 'Georqge', 'username', 'Female')
        PI_ParentalInfo.enterParentInfo('ddh@3qsq4.com');
        PI_AdditionalInfo.addionalInformation();
        // PI_AdditionalInfo.fillphysic('100', '100');
        // PI_AdditionalInfo.sport('Tennis', 'Attacker')
        // PI_AdditionalInfo.addressInfo('India', '11th Area', 'Kerala', 'Ernakulam', '638680')
        // PI_AdditionalInfo.educationalINfo('long way', 'good', '2000', '2010')
        // PI_AdditionalInfo.achievementINfo('long way', 'good', '2000')
        // PI_AdditionalInfo.careerINfo('Stanford', 'lecture', '2018', 'jan', '31', '2020', 'feb', '5');
        PI_addPlayer.addMember();


    });

    it('Verify that Enter the Invalid Email.', () => {
        PI_PersonalInfo.enterPersonalInfo('MNAPOUTY', 'Janqe', 'Georqge', 'username', 'Female')
        PI_addPlayer.checkfunction();

    });


    it('Verify that Enter the Duplicate Email.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_PersonalInfo.enterEmail('replace@mail.com')
        PI_PersonalInfo.clickDate();
        PI_PersonalInfo.duplicateMailWarning();
        PI_PersonalInfo.dtdupliactemail();
        PI_PersonalInfo.isformsdisabled();

    });

    it('Verify that Enter the Invalid DOB.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_randomDetail.randomEmail();
        PI_PersonalInfo.selectDate(2024, 'Jan', 15);
        PI_PersonalInfo.underageWarning();
        PI_randomDetail.randomStudentName();
        PI_randomDetail.randomGender()
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.underageWarning();

    });

    it('Verify that Enter the invalid First Name.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_randomDetail.randomEmail();
        PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_randomDetail.randomLname();
        PI_PersonalInfo.enterUsername();
        PI_randomDetail.randomGender();
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.dtfname();
    });

    it('Verify that Enter the Invalid First name with blank spcae.', () => {
        PI_PersonalInfo.enterPersonalInfo('MNAPOUTY', '   ', 'Georqge', 'username', 'Female')
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();

    });

    it('Verify that Enter the invalid User Name.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_randomDetail.randomStudentName();
        PI_PersonalInfo.clearUsername()
        PI_randomDetail.randomGender()
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();

    });



    it('Verify that Enter the Duplicate User Name.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_randomDetail.randomStudentName();
        PI_PersonalInfo.duplicateUsername();
        PI_randomDetail.randomGender()
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();
        PI_PersonalInfo.dtUsername();

    });

    it('Verify that Enter the invalid Gender.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_randomDetail.randomStudentName();
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();
        PI_PersonalInfo.dtGender();

    });

    // it.only('Verify that Enter the invalid Membership Plan.', () => {
    //     PI_randomDetail.randomStudentInfo();
    //     PI_PersonalInfo.selectDate(2000, 'Jan', 15);
    //     PI_PersonalInfo.selectMembershipPlan('Summer');
    //     PI_addPlayer.checkfunction();
    //     PI_PersonalInfo.clickNext()
    //     PI_PersonalInfo.verifyMembershipPlan('Summer');
    //     PI_PersonalInfo.clickConformPage()
    // });


    // Parent Details >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('Verify that Enter the invalid Parent  Email with Blank Space.', () => {
        PI_randomDetail.randomStudentInfo();
        PI_ParentalInfo.enterParentInfo(' ');
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();
        PI_ParentalInfo.dtPmail();

    });

    it('Verify that Enter the invalid Parent  Email.', () => {
        PI_randomDetail.randomStudentInfo();
        PI_ParentalInfo.enterParentInfo('MMMM');
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();
        PI_ParentalInfo.dtPmail();

    });

    it('Verify that Enter the invalid Parent First Name.', () => {
        PI_randomDetail.randomStudentInfo();
        PI_ParentalInfo.randomPemail()
        PI_ParentalInfo.randomPlname();
        PI_ParentalInfo.enterPhoneno();
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.invalidDetailsWarning();
        PI_ParentalInfo.dtFname();

    });

    it('Verify that Enter the invalid Parent First Name.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_file.clickUploadFile()
        // PI_randomDetail.randomStudentInfo();
        // PI_ParentalInfo.randomPemail();
        // PI_ParentalInfo.randomPfname();

        // // Upload a specific file by name
        // PI_file.UploadValidFile('Sample-pdf.pdf');      // Uploads Sample-pdf.pdf
        // // PI_file.UploadValidFile('testfile-jpg.jpg');  // Uncomment to upload testfile-jpg.jpg
        // // PI_file.UploadValidFile('testfile.png');       // Uncomment to upload testfile.png

        // PI_addPlayer.checkfunction();
        // PI_PersonalInfo.invalidDetailsWarning();
        // PI_ParentalInfo.dtPhonenmbr();
    });


    //File Uploading >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('Upload a specific file dynamically', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        PI_file.clickUploadFile('PDF'); // Upload the "Sample-pdf.pdf" file
        PI_file.uploadSuccessMsg();
        PI_file.clickUploadFile('PNG'); // Upload the "testfile-jpg.jpg" file
        PI_file.uploadSuccessMsg();
        PI_file.clickUploadFile('JPG'); // Upload the "testfile.txt" file
        PI_file.uploadSuccessMsg();
        PI_file.clickUploadFile('WEBM');
        PI_file.uploadFailedMsg();
        // Optionally, you can upload other files by calling the method with a different key
        // PI_file2.clickUploadFile1('testjpg'); // Upload the "testfile-jpg.jpg" file
        // PI_file2.clickUploadFile1('testfile'); // Upload the "testfile.txt" file
    });

    it('Upload a Invalid file dynamically', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        PI_file.clickUploadFile('WEBM');
        PI_file.uploadFailedMsg();
    })

    it('Verify Delete Uploaded file', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        PI_file.clickUploadFile('PDF');
        PI_file.deleteUploadedFile();
    });

    it('Verify Cancel popup of Deletion file', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        PI_file.clickUploadFile('PDF');
        PI_file.canceldltPopup();
    });

    //additional Info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    //Physical Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Physical Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        PI_randomDetail.randomStudentInfo();
        PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterPhysicalHeight('abc1');
        PI_AdditionalInfo.enterPhysicalWeight('abc1');
        PI_addPlayer.checkfunction();
    });

    // it.only('Verify that Valid Physical Info', () => {
    //     PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
    //     // PI_randomDetail.randomStudentInfo();
    //     // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
    //     PI_AdditionalInfo.clickAdditionalInfo();
    //     PI_AdditionalInfo.enterPhysicalHeight(' ');
    //     PI_AdditionalInfo.enterPhysicalWeight(' ');
    //     PI_addPlayer.checkfunction();
    // });

    //Sports Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Sports Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.sport('Tennis', 'Attacker')
        PI_addPlayer.checkfunction();
    });


    //Address Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Address Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.addressInfo('Wal', '101 street', 'Barnsl', 'South City', 'M8 0JB')
        PI_addPlayer.checkfunction();
    });

    //Educational history  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Educational Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.educationalINfo("Harvard", "Btech", "2001", "2004")
        PI_addPlayer.checkfunction();
    })

    it('Verify that Invalid  University with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("   ")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduStartyear("2001");
        PI_AdditionalInfo.enterEduEndyear("2004")
        PI_AdditionalInfo.verifySaveBtnDisabled();

    })

    it('Verify that Empty University Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduStartyear("2001");
        PI_AdditionalInfo.enterEduEndyear("2004")
        PI_AdditionalInfo.verifySaveBtnDisabled();
    })

    it('Verify that Invalid Displine with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduStartyear("2001");
        PI_AdditionalInfo.enterEduEndyear("2004")
        PI_AdditionalInfo.verifySaveBtnDisabled();
    })

    it('Verify that Empty Displine ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterEduStartyear("2001");
        PI_AdditionalInfo.enterEduEndyear("2004")
        PI_AdditionalInfo.verifySaveBtnDisabled();
    })

    it('Verify that Invalid Educational Empty Start Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduEndyear("2004")
        PI_AdditionalInfo.verifySaveBtnDisabled();

    })


    it('Verify that Invalid Educational Invalid Start Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduStartyear("200");
        PI_AdditionalInfo.enterEduEndyear("2004")
        PI_AdditionalInfo.dtStartYearValidation();
        PI_AdditionalInfo.verifySaveBtnDisabled();

    })

    it('Verify that Invalid Educational Empty End Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduStartyear("2001");
        PI_AdditionalInfo.verifySaveBtnDisabled();

    })


    it('Verify that Invalid Educational Invalid End Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduEndyear("200");
        PI_AdditionalInfo.enterEduStartyear("2000");
        PI_AdditionalInfo.dtEndYearValidation();
        PI_AdditionalInfo.verifySaveBtnDisabled();

    })

    it('Verify that Educational Invalid Start Year  and End Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterInstitute("M G University")
        PI_AdditionalInfo.enterDiscipline("Good");
        PI_AdditionalInfo.enterEduStartyear("2005");
        PI_AdditionalInfo.enterEduEndyear("2000");
        PI_AdditionalInfo.dtYearValidation();
        PI_AdditionalInfo.verifySaveBtnDisabled();
    })


    //Career Info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Career Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.careerINfo('Mariyam FA', 'Head Coach', '2000', 'Jun', '17', '2004', 'Nov', '17')
        PI_addPlayer.checkfunction();
    })

    it('Verify that Invalid  Academy with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAcademy("   ");
        PI_AdditionalInfo.enterRole("Head Coach");
        PI_AdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        PI_AdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        PI_AdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Empty Academy Info', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterRole("Head Coach");
        PI_AdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        PI_AdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        PI_AdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Invalid Displine with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAcademy("Mariyam FA");
        PI_AdditionalInfo.enterRole("   ");
        PI_AdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        PI_AdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        PI_AdditionalInfo.isCareerSavebtnDisabled();
    })

    it('Verify that Empty Displine ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAcademy("Mariyam FA");
        PI_AdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        PI_AdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        PI_AdditionalInfo.isCareerSavebtnDisabled();
    })

    it('Verify that Invalid Careers Empty Start Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAcademy("Mariyam FA");
        PI_AdditionalInfo.enterRole("Head Coach");
        PI_AdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        PI_AdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Invalid Careers Empty End Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAcademy("Mariyam FA");
        PI_AdditionalInfo.enterRole("Head Coach");
        PI_AdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        PI_AdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Invalid Careers Start Year  and End Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAcademy("Mariyam FA");
        PI_AdditionalInfo.enterRole("Head Coach");
        PI_AdditionalInfo.selectCareerStDate('2004', 'Nov', '17');
        PI_AdditionalInfo.selectCareerEndDate('2004', 'Nov', '1');
        PI_AdditionalInfo.dtCareerYearValidation();
        PI_AdditionalInfo.isCareerSavebtnDisabled();
    })

    //Achievements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Achievements', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.achievementINfo('Shield Cup', 'Man of the Match', '2008');
        PI_addPlayer.checkfunction();
    })

    it('Verify that Invalid  Event with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterEvent("   ");
        PI_AdditionalInfo.enterAchievements('Man of the Match');
        PI_AdditionalInfo.enterAchievementYear('2008');
        PI_AdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Empty Event', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterAchievements('Man of the Match');
        PI_AdditionalInfo.enterAchievementYear('2008');
        PI_AdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Invalid Achievement with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterEvent("'Shield Cup'");
        PI_AdditionalInfo.enterAchievements("   ");
        PI_AdditionalInfo.enterAchievementYear('2008');
        PI_AdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Empty Achievement ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterEvent('Shield Cup');
        PI_AdditionalInfo.enterAchievementYear('2008');
        PI_AdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Invalid Achievement Year with Blank Space', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterEvent('Shield Cup');
        PI_AdditionalInfo.enterAchievements('Man of the Match');
        PI_AdditionalInfo.enterAchievementYear('  ');
        PI_AdditionalInfo.isAchievementSavebtnDisabled();

    })

    it('Verify that Invalid Achievement Empty Year ', () => {
        PI_PersonalInfo.visitPendinginvites(); // Navigate to the page
        // PI_randomDetail.randomStudentInfo();
        // PI_PersonalInfo.selectDate(2000, 'Jan', 15);
        PI_AdditionalInfo.clickAdditionalInfo();
        PI_AdditionalInfo.enterEvent('Shield Cup');
        PI_AdditionalInfo.enterAchievements('Man of the Match');
        PI_AdditionalInfo.isAchievementSavebtnDisabled();

    })
});