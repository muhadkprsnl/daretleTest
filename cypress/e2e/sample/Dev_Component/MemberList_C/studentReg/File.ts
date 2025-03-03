import 'cypress-file-upload';

export class File {

    // Selectors >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    PI_uploadBtn = '.upload-contain';
    PI_chooseFileBtn = '.btn-dark';// Change to file input selector
    PI_uploadSuccessBtn = '.btn-success';
    PI_cancel = '.btn-light';
    PI_FilepopUp_CloseBtn = '.model-close';


    // Define the mapping of file names to their paths
    filesToUpload: { [key: string]: string } = {
        PDF: 'Sample-pdf.pdf',
        JPG: 'testfile-jpg.jpg',
        TXT: 'testfile.txt',
        XLSX: 'file_example_XLSX_5000.xlsx',
        DOC: 'file-sample_1MB.doc',
        MOV: 'file_example_MOV_480_700kB.mov',
        OGG: 'sample1.ogg',
        WEBM: 'sample_1920x1080.webm',
        MP4: 'SampleVideo_1280x720_1mb.mp4',
        JPEG: 'sample_1280×853.jpeg',
        PSD: 'text.psd',
        PNG: 'testfile.png'
    };


    // Click Actions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clickUploadBtn() {
        cy.get(this.PI_uploadBtn)
            .scrollIntoView()
            .click();
    }

    // Click the "Choose File" button
    clickUploadFile(fileKey: string) {
        this.clickUploadBtn()
        const filePath = this.filesToUpload[fileKey];
        if (!filePath) {
            throw new Error(`File with key "${fileKey}" does not exist in filesToUpload.`);
        }

        cy.log(`Uploading file: ${filePath}`);
        cy.get('input[type="file"]').attachFile(filePath); // Attach the file
        cy.wait(1000); // Optional: Wait for the UI to update

        // Click the "Upload" button
        cy.get(this.PI_uploadSuccessBtn).click();

    }

    //Toaster message  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    pI_successMsg = '#toast-container > .ng-trigger';


    uploadSuccessMsg() {
        cy.get(this.pI_successMsg)
            .should('be.visible')
            .and('contain.text', 'Upload Successful')
            .and('contain.text', 'File uploaded successfully.');
    }

    uploadFailedMsg() {
        cy.get(this.pI_successMsg)
            .should('be.visible')
            .and('contain.text', 'File type invalid.')
            .and('contain.text', 'Please select a proper file type (JPG, PNG, PDF).');
    }

    dltSuccessMsg() {
        cy.get(this.pI_successMsg)
            .should('be.visible')
            .and('contain.text', 'Deletion Successful')
            .and('contain.text', 'Attachment deleted successfully');
    }

    // Delete Uploaded files   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    dltfileBtn = '.col-5 > img';
    dltpopupConformBtn = '.swal2-confirm';
    dltpopupCancelBtn = '.swal2-cancel';

    deleteUploadedFile() {
        cy.get('.toast-close-button > .ng-tns-c969959638-14').click();
        cy.get(this.dltfileBtn).click();
        cy.get(this.dltpopupConformBtn).click();
        this.dltSuccessMsg();
    }

    canceldltPopup() {
        cy.get(this.dltfileBtn).click();
        cy.get(this.dltpopupCancelBtn).click();
    }

}
