class oCalc {
    constructor() {
        return this;
    };

    size () {
        var sizes = {
            1: "6x8",
            2: "6x7 IV",
            3: "6x7 IVR",
            4: "10x12",
            5: "10x10",
            6: "10x15",
            7: "10x20",
            8: "10x25",
            9: "10x30",
            10: "5x7.2",
            11: "6x8 TPTDie",
            12: "7x9",
            13: "5x6",
            14: "8.5 x 10.5",
            15: "7x9 Acne"
        };
            return sizes;
        }

    calculate () {
        var calc = {
            1: {
                "Material": 16,
                "Cotton": 45,
                "Release A": 16,
                "Release B": 16,
                "Packing (A)": 10.5,
                "Packing (B)": 10.5
            },
            2: {
                "Material": 16,
                "Paper Strip 12mm" : 16.5,
                "Release A": 16,
                "Release B": 16,
                "Packing (A)": 10,
                "Packing (B)": 10
            },
            3: {
                "Material": 12,
                "Cotton": 65,
                "Release A": 12,
                "Release B": 12,
                "Packing (A)": 7.5,
                "Packing (B)": 7.5
            },
            4: {
                "Material": 8.3,
                "Paper Strip 12mm" : 8.1,
                "Release A": 8.1,
                "Packing (A)": 7.3,
                "Packing (B)": 7.3
            },
            5: {
                "Material": 9.7,
                "Cotton": 22.22,
                "Release A": 9.7,
                "Release B": 9.7,
                "Packing (A)": 7.3,
                "Packing (B)": 7.3
            },
            6: {
                "Material": 6.5,
                "Cotton": 10.4,
                "Release A": 6.5,
                "Release B": 6.5,
                "Packing (A)": 5,
                "Packing (B)": 5
            },
            7: {
                "Material": 4.9,
                "Cotton": 6.8,
                "Release A": 4.9,
                "Release B": 4.9,
                "Packing (A)": 4,
                "Packing (B)": 4
            },
            8: {
                "Material": 3.9,
                "Cotton": 5,
                "Release A": 3.9,
                "Release B": 3.9,
                "Packing (A)": 3.3,
                "Packing (B)": 3.3
            },
            9: {
                "Material": 3.3,
                "Cotton": 4,
                "Release A": 3.3,
                "Release B": 3.3,
                "Packing (A)": 2.8,
                "Packing (B)": 2.8
            },
            10: {
                "Material": 18.5,
                "Cotton": 38,
                "Release A": 18.5,
                "Release B": 18.5,
                "Packing (A)": 12,
                "Packing (B)": 12
            },
            11: {
                "Material": 16,
                "Cotton": 45,
                "Release A": 16,
                "Release B": 16,
                "Packing (A)": 10.5,
                "Packing (B)": 10.5
            },
            12: {
                "Material": 13.7,
                "Cotton": 13.7,
                "Release A": 13.7,
                "Release B": 13.7,
                "Packing (A)": 9.4,
                "Packing (B)": 9.4,
                "Paper Strip 12mm": 13.7,
                "Paper Strip 12mm": 6.8,
                "NW Jali Roll": 13.7
            },
            13: {
                "Material": 12,
                "Cotton": 15,
                "Release A": 16,
                "Release B": 16,
                "Packing (A)": 10.5,
                "Packing (B)": 10.5
            },
            14: {
                "Material": 9.7,
                "Cotton": 22,
                "Release A": 9.7,
                "Release B": 9.7,
                "Packing (A)": 7.3,
                "Packing (B)": 7.3
            },
            15: {
                "Material": 10.4,
                "Release B": 10.4,
                "Packing (A)": 7.3,
                "Packing (B)": 7.3
            }
        };
        return calc;
    }
}

var calc = new oCalc();