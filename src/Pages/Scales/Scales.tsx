import React, { useState } from 'react';
import {
    NotesStrings,
    notesArray,
    isAtScale,
    strings,
    getNote
} from '../../core/notes';
import range from '../../core/range';
import Cell from '../../Components/Core/Table/TableCell/Cell';
import {
    Container,
    Label
} from '../../Components/Core/Table/TableCell/Cell.styles';
import BoxSelector from '../../Components/Core/BoxSelector';
import Selector from '../../Components/Core/Selector';
import NumberSelector from '../../Components/Core/NumberSelector';
import Table from '../../Components/Core/Table';
import { Separator } from './Scales.styles';

export default () => {
    const [scale, setScale] = useState(0);
    const [scaleKind, setScaleKind] = useState(0);
    const [fretNumber, setFretNumber] = useState(11);
    const [stringNumber, setStringNumber] = useState(6);
    const [instrument, setInstrument] = useState('Guitar');

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1).map(i => getNote((stringNote + i) % 12));

    return (
        <>
            <Separator>
                <BoxSelector
                    options={[
                        { name: 'diatonic', value: 0 },
                        { name: 'harmonic', value: 1 },
                        { name: 'double harmonic', value: 2 },
                        { name: 'pentatonic', value: 3 }
                    ]}
                    selected={scaleKind}
                    onChange={setScaleKind}
                    title='Scale'
                />
                <BoxSelector
                    options={[
                        { name: 'Standard', value: 0 },
                        { name: 'Drop D', value: 1 },
                        { name: 'Drop C', value: 2 },
                        { name: 'DADGAD', value: 3 }
                    ]}
                    selected={0}
                    onChange={() => {}}
                    title='Tuning'
                />
            </Separator>
            <Separator>
                <Selector
                    title='Instrument'
                    selected={instrument}
                    onChange={instrument => {
                        switch (instrument) {
                            case 'Guitar':
                                setStringNumber(6);
                                break;
                            case 'Bass':
                                setStringNumber(4);
                        }
                        setInstrument(instrument);
                    }}
                    options={['Guitar', 'Bass']}
                />
                <NumberSelector
                    min={instrument === 'Guitar' ? 6 : 4}
                    max={instrument === 'Guitar' ? 8 : 6}
                    value={stringNumber}
                    onChange={setStringNumber}
                    title='Strings'
                />
                <NumberSelector
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                    title='Frets'
                />
            </Separator>
            <BoxSelector
                options={[
                    { name: 'C', value: 0 },
                    { name: 'C#', value: 1 },
                    { name: 'D', value: 2 },
                    { name: 'D#', value: 3 },
                    { name: 'E', value: 4 },
                    { name: 'F', value: 5 },
                    { name: 'F#', value: 6 },
                    { name: 'G', value: 7 },
                    { name: 'G#', value: 8 },
                    { name: 'A', value: 9 },
                    { name: 'A#', value: 10 },
                    { name: 'B', value: 11 }
                ]}
                selected={scale}
                onChange={setScale}
                title='Key'
            />
            <Table
                body={strings[instrument][stringNumber].map((string, index) => (
                    <tr key={index}>
                        {generateStringNotes(string).map((note: any, i) => (
                            <Cell
                                key={i}
                                text={note}
                                size={fretNumber}
                                active={isAtScale(note, scale, scaleKind)}
                            />
                        ))}
                    </tr>
                ))}
                foot={range(fretNumber + 1).map(i => (
                    <Container key={i} size={fretNumber}>
                        <Label>
                            <b>{i}</b>
                        </Label>
                    </Container>
                ))}
            />
        </>
    );
};
