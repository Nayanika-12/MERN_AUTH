const authUser = (req,res) => {
    res.status(200).json({message: 'User Authenticated'});
};

export {authUser};