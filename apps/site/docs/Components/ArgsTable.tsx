export default function ArgsTable({
    props
}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Default</th>
                </tr>
            </thead>
            <tbody>
                {props.map(p => (
                    <tr>
                        <td><strong>{p.name}</strong></td>
                        <td>
                            {p.description}
                            <br/>
                            <code>
                                {p.types.map((t, index) => (
                                <>
                                    {index > 0 && <br/>}
                                    {t}
                                </>
                                ))}
                            </code>
                        </td>
                        <td>{p.default || '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}