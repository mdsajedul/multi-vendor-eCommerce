
const createRiderProfile = (req, res) => {
    const rider = new Rider(req.body);
    rider.save()
        .then(rider => {
            res.status(200).json({
                message: "Rider created successfully",
                rider: rider
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
}