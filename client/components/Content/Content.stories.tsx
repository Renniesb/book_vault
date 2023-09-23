
import React from 'react';
import { Meta } from '@storybook/react';
import Content from './Content';
import { ContentProps } from '../../types/componentProps';

export default {
  title: 'Components/Content',
  component: Content,
} as Meta;

type ContentStory = {
  args: ContentProps; 
};

export const Default: ContentStory = {
  args: {
    allContent: [
        {
            "kind": "books#volume",
            "id": "84wbDAAAQBAJ",
            "etag": "cyciYdMANtY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/84wbDAAAQBAJ",
            "volumeInfo": {
                "title": "The History Book",
                "subtitle": "Big Ideas Simply Explained",
                "authors": [
                    "DK"
                ],
                "publisher": "Penguin",
                "publishedDate": "2016-09-16",
                "description": "Travel thousands of years into our past and discover the significant events that shaped the world as we know it. This book includes short, descriptive explanations of key ideas, themes, and events of world history that are easy to understand. Explore topics such as the founding of Baghdad, the colonization of the Americas, and the inception of Buddhism without complicated jargon. This book is part of DK's award-winning Big Ideas Simply Explained educational series that uses witty graphics and engaging descriptions to enlighten readers. Don't stop at American history, explore the world! This book is full of fun facts from the human story, going as far back as the origins of our species to space exploration today. Discover all things revolution, from the French to the digital, including the rise of the internet. Enjoy short and sweet biographies of some of the most important thinkers and leaders throughout history, like Martin Luther, Charles Darwin, and Nelson Mandela. You'll learn who said famous historical quotes, and what they really meant when they said it. Big Ideas This is a modern twist on the good old-fashioned encyclopedia, now easier to follow with diagrams, mind maps, and timelines. Step-by-step diagrams will have you reviewing your ideas about history. Start from the very beginning: - Human Origins 200,000 years ago - 3500 BGE - Ancient Civilizations 6000 BGE - 500 CE - The Medieval World 500 - 1492 - Early Modern Era 1420 - 1795 - Changing Societies 1776 - 1914 - The Modern World 1914 - Present The Series Simply Explained With over 7 million copies sold worldwide to date, The History Book is part of the award-winning Big Ideas Simply Explained series from DK Books. It uses innovative graphics along with engaging writing to make complex subjects easier to understand.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781465457752"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1465457755"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 352,
                "printType": "BOOK",
                "categories": [
                    "History"
                ],
                "averageRating": 1,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.8.8.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=84wbDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=84wbDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=84wbDAAAQBAJ&printsec=frontcover&dq=history&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=84wbDAAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=84wbDAAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 8.99,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 8.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=84wbDAAAQBAJ&rdid=book-84wbDAAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 8990000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 8990000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/The_History_Book-sample-epub.acsm?id=84wbDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/The_History_Book-sample-pdf.acsm?id=84wbDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=84wbDAAAQBAJ&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book is part of DK&#39;s award-winning Big Ideas Simply Explained educational series that uses witty graphics and engaging descriptions to enlighten readers. Don&#39;t stop at American history, explore the world!"
            }
        },
        {
            "kind": "books#volume",
            "id": "4bPezwEACAAJ",
            "etag": "8hSVpRY+ZE4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/4bPezwEACAAJ",
            "volumeInfo": {
                "title": "U.S. History",
                "authors": [
                    "P. Scott Corbett",
                    "Volker Janssen",
                    "John M. Lund"
                ],
                "publishedDate": "2023-04-02",
                "description": "Printed in color. U.S. History is designed to meet the scope and sequence requirements of most introductory courses. The text provides a balanced approach to U.S. history, considering the people, events, and ideas that have shaped the United States from both the top down (politics, economics, diplomacy) and bottom up (eyewitness accounts, lived experience). U.S. History covers key forces that form the American experience, with particular attention to issues of race, class, and gender.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1738998436"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781738998432"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 0,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=4bPezwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=4bPezwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=4bPezwEACAAJ&dq=history&hl=&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=4bPezwEACAAJ&dq=history&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/U_S_History.html?hl=&id=4bPezwEACAAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=4bPezwEACAAJ&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The text provides a balanced approach to U.S. history, considering the people, events, and ideas that have shaped the United States from both the top down (politics, economics, diplomacy) and bottom up (eyewitness accounts, lived ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "Xh4rAAAAIAAJ",
            "etag": "xKSe7QxhnRE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Xh4rAAAAIAAJ",
            "volumeInfo": {
                "title": "What is History?",
                "subtitle": "The George Macaulay Trevelyan Lectures Delivered in the University of Cambridge January-March 1961",
                "authors": [
                    "Edward Hallett Carr"
                ],
                "publishedDate": "1962",
                "description": "A philosophical interpretation of history, examining the significance of historical study as a science and a reflection of social values.",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "UCAL:B3831516"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 280,
                "printType": "BOOK",
                "categories": [
                    "History"
                ],
                "averageRating": 3.5,
                "ratingsCount": 2,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.7.6.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=Xh4rAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=Xh4rAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "ja",
                "previewLink": "http://books.google.com/books?id=Xh4rAAAAIAAJ&q=history&dq=history&hl=&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=Xh4rAAAAIAAJ&dq=history&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/What_is_History.html?hl=&id=Xh4rAAAAIAAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=Xh4rAAAAIAAJ&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "A philosophical interpretation of history, examining the significance of historical study as a science and a reflection of social values."
            }
        },
        {
            "kind": "books#volume",
            "id": "BWsnWlfq4jcC",
            "etag": "mfe4lfR9YG4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/BWsnWlfq4jcC",
            "volumeInfo": {
                "title": "History of Shit",
                "authors": [
                    "Dominique Laporte"
                ],
                "publisher": "MIT Press",
                "publishedDate": "2002-02-22",
                "description": "\"A brilliant account of the politics of shit. It will leave you speechless.\" Written in Paris after the heady days of student revolt in May 1968 and before the devastation of the AIDS epidemic, History of Shit is emblematic of a wild and adventurous strain of 1970s' theoretical writing that attempted to marry theory, politics, sexuality, pleasure, experimentation, and humor. Radically redefining dialectical thought and post-Marxist politics, it takes an important—and irreverent—position alongside the works of such postmodern thinkers as Foucault, Deleuze, Guattari, and Lyotard. Laporte's eccentric style and ironic sensibility combine in an inquiry that is provocative, humorous, and intellectually exhilarating. Debunking all humanist mythology about the grandeur of civilization, History of Shit suggests instead that the management of human waste is crucial to our identities as modern individuals—including the organization of the city, the rise of the nation-state, the development of capitalism, and the mandate for clean and proper language. Far from rising above the muck, Laporte argues, we are thoroughly mired in it, particularly when we appear our most clean and hygienic. Laporte's style of writing is itself an attack on our desire for \"clean language.\" Littered with lengthy quotations and obscure allusions, and adamantly refusing to follow a linear argument, History of Shit breaks the rules and challenges the conventions of \"proper\" academic discourse.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0262621606"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780262621601"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 180,
                "printType": "BOOK",
                "categories": [
                    "History"
                ],
                "averageRating": 4,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.2.5.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=BWsnWlfq4jcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=BWsnWlfq4jcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=BWsnWlfq4jcC&printsec=frontcover&dq=history&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=BWsnWlfq4jcC&dq=history&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/History_of_Shit.html?hl=&id=BWsnWlfq4jcC"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/History_of_Shit-sample-pdf.acsm?id=BWsnWlfq4jcC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=BWsnWlfq4jcC&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Radically redefining dialectical thought and post-Marxist politics, it takes an important—and irreverent—position alongside the works of such postmodern thinkers as Foucault, Deleuze, Guattari, and Lyotard."
            }
        },
        {
            "kind": "books#volume",
            "id": "J8dNX2PqOpcC",
            "etag": "pCNY6yGNs24",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/J8dNX2PqOpcC",
            "volumeInfo": {
                "title": "National Geographic History Book",
                "authors": [
                    "Marcus Cowper"
                ],
                "publisher": "National Geographic Books",
                "publishedDate": "2011-10-18",
                "description": "A chronological journey through world history from the beginnings of man becomes interactive with reproductions of historical documents, including pages from the Gutenberg Bible, William Shakespeare's will, and blueprints for the Titanic.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781426206795"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1426206798"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 188,
                "printType": "BOOK",
                "categories": [
                    "World history"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.7.4.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=J8dNX2PqOpcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=J8dNX2PqOpcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=J8dNX2PqOpcC&printsec=frontcover&dq=history&hl=&cd=5&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=J8dNX2PqOpcC&dq=history&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/National_Geographic_History_Book.html?hl=&id=J8dNX2PqOpcC"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=J8dNX2PqOpcC&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "A chronological journey through world history from the beginnings of man becomes interactive with reproductions of historical documents, including pages from the Gutenberg Bible, William Shakespeare&#39;s will, and blueprints for the Titanic."
            }
        },
        {
            "kind": "books#volume",
            "id": "6PdFDwAAQBAJ",
            "etag": "dSDDh3ZdWF4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/6PdFDwAAQBAJ",
            "volumeInfo": {
                "title": "What is the History of the Book?",
                "authors": [
                    "James Raven"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2018-01-08",
                "description": "James Raven, a leading historian of the book, offers a fresh and accessible guide to the global study of the production, dissemination and reception of written and printed texts across all societies and in all ages. Students, teachers, researchers and general readers will benefit from the book's investigation of the subject's origins, scope and future direction. Based on original research and a wide range of sources, What is the History of the Book? shows how book history crosses disciplinary boundaries and intersects with literary, historical, media, library, conservation and communications studies. Raven uses examples from around the world to explore different traditions in bibliography, palaeography and manuscript studies. He analyses book history's growing global ambition and demonstrates how the study of reading practices opens up new horizons in social history and the history of knowledge. He shows how book history is contributing to debates about intellectual and popular culture, colonialism and the communication of ideas. The first global, accessible introduction to the field of book history from ancient to modern times, What is the History of the Book? is essential reading for all those interested in one of society's most important cultural artefacts.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781509523214"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1509523219"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 196,
                "printType": "BOOK",
                "categories": [
                    "History"
                ],
                "averageRating": 4,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=6PdFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=6PdFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=6PdFDwAAQBAJ&printsec=frontcover&dq=history&hl=&cd=6&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=6PdFDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=6PdFDwAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 20,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 20,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=6PdFDwAAQBAJ&rdid=book-6PdFDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 20000000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 20000000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/What_is_the_History_of_the_Book-sample-epub.acsm?id=6PdFDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/What_is_the_History_of_the_Book-sample-pdf.acsm?id=6PdFDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=6PdFDwAAQBAJ&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "James Raven, a leading historian of the book, offers a fresh and accessible guide to the global study of the production, dissemination and reception of written and printed texts across all societies and in all ages."
            }
        }
    ]
,
    checkedGenres: [],
    checkedYears: [],
    contentTypeSelected: '',
    searchTerm: '',
  },
};
