use crate::{interval::Interval, note::Note};

pub const MAJOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::WholeTone,
];

pub const MINOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
];

fn make_scale(root: Note, intervals: &[Interval; 6]) -> [Note; 7] {
    let root_index = root.to_u8();
    let second_index = (root_index + (intervals[0]).to_u8()) % 12;
    let third_index = (root_index + intervals[0].to_u8() + intervals[1].to_u8()) % 12;
    let fourth_index =
        (root_index + intervals[0].to_u8() + intervals[1].to_u8() + intervals[2].to_u8()) % 12;
    let fifth_index = (root_index
        + intervals[0].to_u8()
        + intervals[1].to_u8()
        + intervals[2].to_u8()
        + intervals[3].to_u8())
        % 12;
    let sixth_index = (root_index
        + intervals[0].to_u8()
        + intervals[1].to_u8()
        + intervals[2].to_u8()
        + intervals[3].to_u8()
        + intervals[4].to_u8())
        % 12;
    let seventh_index = (root_index
        + intervals[0].to_u8()
        + intervals[1].to_u8()
        + intervals[2].to_u8()
        + intervals[3].to_u8()
        + intervals[4].to_u8()
        + intervals[5].to_u8())
        % 12;
    [
        Note::from_u8(root_index).unwrap(),
        Note::from_u8(second_index).unwrap(),
        Note::from_u8(third_index).unwrap(),
        Note::from_u8(fourth_index).unwrap(),
        Note::from_u8(fifth_index).unwrap(),
        Note::from_u8(sixth_index).unwrap(),
        Note::from_u8(seventh_index).unwrap(),
    ]
}

fn make_major_scale(root: Note) -> [Note; 7] {
    make_scale(root, &MAJOR_SCALE)
}

fn make_minor_scale(root: Note) -> [Note; 7] {
    make_scale(root, &MINOR_SCALE)
}

#[cfg(test)]
mod test_scale {
    use super::*;
    use crate::note::Note;

    #[test]
    fn test_make_major_scale() {
        assert_eq!(
            make_major_scale(Note::C),
            [
                Note::C,
                Note::D,
                Note::E,
                Note::F,
                Note::G,
                Note::A,
                Note::B
            ]
        );
        assert_eq!(
            make_major_scale(Note::G),
            [
                Note::G,
                Note::A,
                Note::B,
                Note::C,
                Note::D,
                Note::E,
                Note::FG,
            ]
        );
    }

    #[test]
    fn test_make_minor_scale() {
        assert_eq!(
            make_minor_scale(Note::A),
            [
                Note::A,
                Note::B,
                Note::C,
                Note::D,
                Note::E,
                Note::F,
                Note::G,
            ]
        );
        assert_eq!(
            make_minor_scale(Note::E),
            [
                Note::E,
                Note::FG,
                Note::G,
                Note::A,
                Note::B,
                Note::C,
                Note::D,
            ]
        );
    }
}
