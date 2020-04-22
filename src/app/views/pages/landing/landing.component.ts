import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: [ './landing.component.scss' ],
    providers: [ NgbTabsetConfig ],
})
export class LandingComponent implements OnInit {
    clients = [ '1', '2', '3', '4', '5' ];
    partners = [ '1', '2', '3', '4' ];
    carousolLoop = [ '0', '1', '2' ];
    // testemonials = [
    //     {
    //         name: 'خالد الخالد',
    //         title: 'عضو في كفاءات منذ أكتوبر 2019',
    //         testemonial:
    //             'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
    //     },
    //     {
    //         name: 'أحمد ابراهيم',
    //         title: 'عضو في كفاءات منذ أكتوبر 2019',
    //         testemonial:
    //             'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
    //     },
    //     {
    //         name: 'خالد الخالد',
    //         title: 'عضو في كفاءات منذ أكتوبر 2019',
    //         testemonial:
    //             'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
    //     },
    //     {
    //         name: 'أحمد ابراهيم',
    //         title: 'عضو في كفاءات منذ أكتوبر 2019',
    //         testemonial:
    //             'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
    //     },
    // ];

    testemonials = [
        {
            item1: {
                name: 'خالد الخالد',
                title: 'عضو في كفاءات منذ أكتوبر 2019',
                testemonial:
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
            },
            item2: {
                name: 'أحمد ابراهيم',
                title: 'عضو في كفاءات منذ أكتوبر 2019',
                testemonial:
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
            },
        },
        {
            item1: {
                name: 'خالد الخالد',
                title: 'عضو في كفاءات منذ أكتوبر 2019',
                testemonial:
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
            },
            item2: {
                name: 'أحمد ابراهيم',
                title: 'عضو في كفاءات منذ أكتوبر 2019',
                testemonial:
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
            },
        },
        {
            item1: {
                name: 'خالد الخالد',
                title: 'عضو في كفاءات منذ أكتوبر 2019',
                testemonial:
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
            },
            item2: {
                name: 'أحمد ابراهيم',
                title: 'عضو في كفاءات منذ أكتوبر 2019',
                testemonial:
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
            },
        },
    ];

    constructor(config: NgbTabsetConfig) {
        // customize default values of tabsets used by this component tree
        config.justify = 'center';
        config.type = 'tabs';
    }
    ngOnInit(): void {}
}