const locationSchema = mongoose.Schema(
    {
        locationName: {
            type: String,
            requred: true,
        },
        locationLat: {
            type: Number,
            required: true,
        },
        LocationLong: {
            type: Number,
            required: true,
        },
    },
        
)
